// Azure DevOps Theme Extension - Script de personalización

// Evitar interferir con scripts de Azure DevOps
let extensionInitialized = false;
let currentUrl = window.location.href;
let urlCheckInterval;

// Función para inicializar la extensión de forma segura
function safeInitialization() {
  if (extensionInitialized) return;
  
  // Esperar a que la página esté completamente cargada
  if (document.readyState !== 'complete') {
    setTimeout(safeInitialization, 100);
    return;
  }
  
  extensionInitialized = true;
  
  // Iniciar monitoreo de cambios de URL para SPA
  startUrlMonitoring();
}

// Función para monitorear cambios de URL en SPA
function startUrlMonitoring() {
  urlCheckInterval = setInterval(() => {
    if (window.location.href !== currentUrl) {
      currentUrl = window.location.href;
      
      // Reaplica los estilos después de un breve delay para permitir que el DOM se actualice
      setTimeout(() => {
        applyCustomizations();
      }, 500);
    }
  }, 250); // Verificar cada 250ms
}

// Limpiar interval al cerrar
window.addEventListener('beforeunload', () => {
  if (urlCheckInterval) {
    clearInterval(urlCheckInterval);
  }
});

// Función para verificar URLs seguras para CSP
function isUrlSafeForCSP(url) {
  if (!url) return false;
  
  // Permitir data URLs y URLs relativas
  if (url.startsWith('data:') || url.startsWith('/') || url.startsWith('./')) {
    return true;
  }
  
  // Dominios permitidos por Azure DevOps CSP (actualizado con los reportados)
  const allowedDomains = [
    'dev.azure.com',
    'visualstudio.com', 
    'vsassets.io',
    'vsassetscdn.azure.cn',
    'gallerycdn.vsassets.io',
    'gallerycdn.azure.cn',
    'blob.core.windows.net',
    'login.microsoftonline.com',
    'amcdn.msftauth.net',
    'web.vortex.data.microsoft.com',
    'browser.events.data.microsoft.com'
  ];
  
  try {
    const urlObj = new URL(url);
    return allowedDomains.some(domain => urlObj.hostname.includes(domain) || urlObj.hostname === domain);
  } catch (error) {
    return false;
  }
}

function applyCustomizations() {
  try {
    // Buscar el elemento con la clase 'vss-PivotBar--bar-one-line bottom-border'
    const pivotBarElement = document.querySelector('.vss-PivotBar--bar-one-line.bottom-border');
    
    if (pivotBarElement) {
      // Agregar la clase de personalización
      pivotBarElement.classList.add('azure-bg-image-personalized');
      
      // Buscar la imagen con la clase 'vss-Persona-content using-image'
      const personaImage = document.querySelector('img.vss-Persona-content.using-image');
      
      if (personaImage) {
        // Extraer el valor del src de la imagen
        const imageSrc = personaImage.src;
        
        if (imageSrc) {
          // Verificar que la imagen sea segura para CSP
          if (isUrlSafeForCSP(imageSrc)) {
            // Aplicar el background-image con el gradiente y la imagen extraída
            const backgroundImageStyle = `
              linear-gradient(0deg, #0000007d, #0000007d),
              url("${imageSrc}")
            `;
            
            pivotBarElement.style.setProperty('background-image', backgroundImageStyle, 'important');
          } else {
            // Aplicar solo el gradiente sin imagen
            pivotBarElement.style.setProperty('background-image', 'linear-gradient(0deg, #0000007d, #0000007d)', 'important');
          }
        }
      }
    }
  } catch (error) {
    // Error silencioso
  }
}

// Ejecutar con inicialización segura
safeInitialization();
setTimeout(() => {
  applyCustomizations();
}, 500); // Delay adicional para evitar conflictos

// Observer para detectar cambios dinámicos en el DOM (mejorado para SPA)
const observer = new MutationObserver(function(mutations) {
  if (!extensionInitialized) return;
  
  let shouldReapply = false;
  let hasStructuralChanges = false;
  
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      // Detectar cambios estructurales importantes
      if (mutation.addedNodes.length > 0) {
        for (let node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Verificar si se agregaron elementos relevantes
            if (node.querySelector && (
              node.querySelector('[role="navigation"]') ||
              node.querySelector('.vss-PivotBar--bar-one-line') ||
              node.classList?.contains('bolt-page') ||
              node.classList?.contains('page-content')
            )) {
              hasStructuralChanges = true;
              shouldReapply = true;
              break;
            }
          }
        }
      }
      
      // También detectar cuando se remueven elementos importantes
      if (mutation.removedNodes.length > 0) {
        for (let node of mutation.removedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE && node.querySelector) {
            if (node.querySelector('[role="navigation"]') || 
                node.querySelector('.vss-PivotBar--bar-one-line')) {
              hasStructuralChanges = true;
              shouldReapply = true;
              break;
            }
          }
        }
      }
    }
  });
  
  if (shouldReapply) {
    const delay = hasStructuralChanges ? 500 : 200;
    setTimeout(() => {
      applyCustomizations();
    }, delay);
  }
});

// Configurar el observer solo después de la inicialización
setTimeout(() => {
  if (extensionInitialized) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}, 1000);

// También ejecutar cuando se complete la carga
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    safeInitialization();
    applyCustomizations();
  }, 300);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    safeInitialization();
    applyCustomizations();
  }, 500);
});

// Eventos específicos para SPA de Azure DevOps
window.addEventListener('popstate', () => {
  setTimeout(() => {
    applyCustomizations();
  }, 300);
});

// Interceptar clicks en enlaces para detectar navegación SPA
document.addEventListener('click', (event) => {
  const target = event.target.closest('a');
  if (target && target.href && target.href.includes('dev.azure.com')) {
    setTimeout(() => {
      applyCustomizations();
    }, 600); // Delay mayor para navegación
  }
}, true);

// Detectar cambios en el hash (navegación por anchors)
window.addEventListener('hashchange', () => {
  setTimeout(() => {
    applyCustomizations();
  }, 300);
});