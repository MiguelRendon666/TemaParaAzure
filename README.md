# Azure DevOps Modern Theme Extension# Azure DevOps Modern Theme Extension# Azure DevOps Theme Extension



Una extensión de Chrome que moderniza la interfaz de Azure DevOps con un tema elegante, efectos de cristal esmerilado y fondos personalizados dinámicos.



## Características del TemaUna extensión de Chrome que moderniza la interfaz de Azure DevOps con un tema elegante, efectos de cristal esmerilado y fondos personalizados dinámicos.Una extensión de Chrome para personalizar la apariencia de Azure DevOps con estilos CSS personalizados y funcionalidades JavaScript adicionales.



### **Fondo Dinámico**

- **Imagen de fondo aleatoria** aplicada a toda la página

- **Gradiente overlay** para mejorar la legibilidad## 🎨 Características del Tema## Características

- **Fondo personalizado** en la barra de navegación con la imagen de perfil del usuario

- **Actualización automática** en navegación SPA



### **Efectos Visuales Modernos**### **Fondo Dinámico**- 🎨 Aplica estilos CSS personalizados sobre la interfaz de Azure DevOps

- **Bordes redondeados** en todos los elementos (tarjetas, botones, paneles)

- **Efecto cristal esmerilado** (backdrop-filter: blur) en elementos clave- **Imagen de fondo aleatoria** aplicada a toda la página- 🖼️ Personaliza el fondo de la barra de navegación con la imagen del usuario

- **Fondos semitransparentes** para mantener visibilidad

- **Transiciones suaves** en todas las interacciones (0.5s ease)- **Gradiente overlay** para mejorar la legibilidad- 🔄 Detecta cambios dinámicos en la página y reaplica los estilos



### **Elementos Estilizados**- **Fondo personalizado** en la barra de navegación con la imagen de perfil del usuario- 💫 Mejora la apariencia de las tarjetas y elementos de perfil



#### **Navegación y Estructura**- **Actualización automática** en navegación SPA

- Barra de navegación superior transparente con blur

- Elementos de navegación con bordes redondeados extremos## Instalación

- Barras de pestañas con gradientes y efectos de cristal

- Efectos hover mejorados con brillo y transparencias### **Efectos Visuales Modernos**



#### **Tarjetas y Contenedores**- **Bordes redondeados** en todos los elementos (tarjetas, botones, paneles)1. Descarga o clona este repositorio

- Todas las tarjetas con bordes redondeados de 2rem

- Fondo semitransparente con blur para mantener legibilidad- **Efecto cristal esmerilado** (backdrop-filter: blur) en elementos clave2. Abre Chrome y ve a `chrome://extensions/`

- Paneles y callouts con esquinas redondeadas consistentes

- Tooltips y dropdowns modernizados- **Fondos semitransparentes** para mantener visibilidad3. Activa el "Modo de desarrollador" en la esquina superior derecha



#### **Componentes de Interfaz**- **Transiciones suaves** en todas las interacciones (0.5s ease)4. Haz clic en "Cargar extensión sin empaquetar"

- Botones completamente redondeados

- Campos de texto con bordes suaves5. Selecciona la carpeta de la extensión

- Avatares de usuario perfectamente circulares

- Elementos de medios con esquinas redondeadas### **Elementos Estilizados**6. ¡Listo! La extensión se aplicará automáticamente en Azure DevOps



### **Funcionalidades Dinámicas**

- **Detección de navegación SPA**: Mantiene el tema durante la navegación sin recarga

- **Monitoreo de cambios**: Observer que detecta modificaciones del DOM#### **Navegación y Estructura**## Funcionalidades

- **Validación CSP**: Solo utiliza recursos seguros compatibles con Azure DevOps

- **Aplicación automática**: Reaplica estilos en navegación dinámica- ✨ Barra de navegación superior transparente con blur



## Instalación- 🔘 Elementos de navegación con bordes redondeados extremos### Estilos CSS aplicados:



### **Método 1: Instalación Manual (Recomendado)**- 📊 Barras de pestañas con gradientes y efectos de cristal- **`.bolt-card`**: Bordes redondeados mejorados



1. **Descarga el código**- 🎯 Efectos hover mejorados con brillo y transparencias- **`.project-overview-card`**: Márgenes optimizados

   ```bash

   git clone https://github.com/tu-usuario/azure-devops-theme-extension.git- **`.project-persona .vss-Persona-content`**: Avatar circular perfecto

   ```

   #### **Tarjetas y Contenedores**- **`.azure-bg-image-personalized`**: Fondo personalizado con imagen

2. **Abre Chrome Extensions**

   - Ve a `chrome://extensions/`- 🏷️ Todas las tarjetas con bordes redondeados de 2rem

   - Activa el **"Modo de desarrollador"** (esquina superior derecha)

- 🌫️ Fondo semitransparente con blur para mantener legibilidad### Script JavaScript:

3. **Carga la extensión**

   - Haz clic en **"Cargar extensión sin empaquetar"**- 📦 Paneles y callouts con esquinas redondeadas consistentes- Detecta elementos con clase `vss-PivotBar--bar-one-line bottom-border`

   - Selecciona la carpeta del proyecto descargado

   - Haz clic en **"Seleccionar carpeta"**- 💬 Tooltips y dropdowns modernizados- Extrae la imagen del perfil de usuario (`vss-Persona-content using-image`)



4. **Verifica la instalación**- Aplica un fondo personalizado con gradiente y la imagen del usuario

   - La extensión aparecerá como "Azure DevOps Theme Extension"

   - Asegúrate de que esté **habilitada** (toggle azul)#### **Componentes de Interfaz**- Monitorea cambios en el DOM para mantener la personalización



### **Método 2: Desde Archivo ZIP**- 🔘 Botones completamente redondeados



1. Descarga el archivo ZIP del repositorio- 📝 Campos de texto con bordes suaves## Estructura de archivos

2. Extrae el contenido a una carpeta local

3. Sigue los pasos 2-4 del método anterior- 👤 Avatares de usuario perfectamente circulares



## Uso- 🎞️ Elementos de medios con esquinas redondeadas```



1. **Instala la extensión** siguiendo las instrucciones anterioresazure-devops-theme-extension/

2. **Navega a Azure DevOps**: `https://dev.azure.com/`

3. **Inicia sesión** en tu cuenta### **Funcionalidades Dinámicas**├── manifest.json          # Configuración de la extensión

4. **Disfruta del tema** - Se aplicará automáticamente

- **Detección de navegación SPA**: Mantiene el tema durante la navegación sin recarga├── styles.css            # Estilos CSS personalizados

### **Compatibilidad**

- Azure DevOps Services (`https://dev.azure.com/`)- **Monitoreo de cambios**: Observer que detecta modificaciones del DOM├── content.js            # Script de personalización

- Azure DevOps Server (`https://*.dev.azure.com/`)

- Navegación SPA - Mantiene el tema en navegación dinámica- **Validación CSP**: Solo utiliza recursos seguros compatibles con Azure DevOps└── README.md             # Este archivo

- Todas las secciones - Repos, Pipelines, Boards, Test Plans, etc.

- **Aplicación automática**: Reaplica estilos en navegación dinámica```

## Personalización



### **Cambiar la Imagen de Fondo**

## 📦 Instalación## Compatibilidad

Edita el archivo `styles.css` línea 6:

```css

body {

  background: ### **Método 1: Instalación Manual (Recomendado)**- ✅ Chrome (Manifest V3)

    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), 

    url('TU_URL_DE_IMAGEN_AQUI');- ✅ Azure DevOps (https://dev.azure.com/)

  /* ... resto de propiedades ... */

}1. **Descarga el código**- ✅ Carga dinámica de contenido

```

   ```bash

### **Ajustar Transparencias**

   git clone https://github.com/tu-usuario/azure-devops-theme-extension.git## Desarrollo

Modifica los valores `rgba()` en el archivo CSS:

- `rgba(37, 36, 35, 0.55)` - Transparencia de tarjetas   ```

- `rgba(0, 0, 0, 0.8)` - Intensidad del overlay

   Para modificar la extensión:

### **Personalizar Bordes Redondeados**

2. **Abre Chrome Extensions**

Cambia los valores de `border-radius`:

- `2rem` - Bordes estándar   - Ve a `chrome://extensions/`1. Edita los archivos según tus necesidades

- `100%` - Elementos circulares

- `10rem` - Bordes extremadamente redondeados   - Activa el **"Modo de desarrollador"** (esquina superior derecha)2. Recarga la extensión en `chrome://extensions/`



## Estructura de Archivos3. Actualiza la página de Azure DevOps para ver los cambios



```3. **Carga la extensión**

azure-devops-theme-extension/

├── manifest.json              # Configuración de la extensión   - Haz clic en **"Cargar extensión sin empaquetar"**## Notas técnicas

├── styles.css                # Estilos CSS del tema

├── content.js                # Script de funcionalidad dinámica   - Selecciona la carpeta del proyecto descargado

├── README.md                 # Esta documentación

└── docs/                     # Documentación adicional   - Haz clic en **"Seleccionar carpeta"**- La extensión usa `!important` en los CSS para asegurar que los estilos se apliquen correctamente

    ├── INSTALL.md            # Guía de instalación detallada

    └── CSP-SOLUTION.md       # Información sobre Content Security Policy- Incluye un `MutationObserver` para detectar cambios dinámicos en el DOM

```

4. **Verifica la instalación**- Los console.log ayudan a debuggear el funcionamiento de la extensión

## Solución de Problemas   - La extensión aparecerá como "Azure DevOps Theme Extension"

   - Asegúrate de que esté **habilitada** (toggle azul)

### **La extensión no se aplica**

- Verifica que esté **habilitada** en `chrome://extensions/`### **Método 2: Desde Archivo ZIP**

- **Recarga la página** de Azure DevOps (Ctrl+F5)

- Revisa que la URL sea `https://dev.azure.com/*`1. Descarga el archivo ZIP del repositorio

2. Extrae el contenido a una carpeta local

### **Estilos se pierden al navegar**3. Sigue los pasos 2-4 del método anterior

- La extensión detecta automáticamente navegación SPA

- Si persiste, **recarga la extensión** desde Chrome Extensions## 🚀 Uso



### **Elementos no se ven correctamente**1. **Instala la extensión** siguiendo las instrucciones anteriores

- Ajusta las **transparencias** en el CSS2. **Navega a Azure DevOps**: `https://dev.azure.com/`

- Verifica la **imagen de fondo** sea accesible3. **Inicia sesión** en tu cuenta

- Prueba **desactivando otras extensiones** temporalmente4. **¡Disfruta del tema!** - Se aplicará automáticamente



### **Problemas de rendimiento**### **Compatibilidad**

- La extensión está optimizada para minimal impacto- ✅ **Azure DevOps Services** (`https://dev.azure.com/`)

- Si experimentas lentitud, verifica otras extensiones- ✅ **Azure DevOps Server** (`https://*.dev.azure.com/`)

- ✅ **Navegación SPA** - Mantiene el tema en navegación dinámica

## Seguridad y Privacidad- ✅ **Todas las secciones** - Repos, Pipelines, Boards, Test Plans, etc.



- **No recopila datos** personales## 🔧 Personalización

- **Solo actúa en Azure DevOps** - dominios especificados en el manifest

- **Cumple con CSP** - Utiliza solo recursos seguros permitidos### **Cambiar la Imagen de Fondo**

- **Código abierto** - Revisable y modificable

Edita el archivo `styles.css` línea 6:

## Contribuciones```css

body {

Las contribuciones son bienvenidas. Para contribuir:  background: 

    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), 

1. **Fork** el repositorio    url('TU_URL_DE_IMAGEN_AQUI');

2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)  /* ... resto de propiedades ... */

3. **Commit** tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)}

4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)```

5. **Abre un Pull Request**

### **Ajustar Transparencias**

## Licencia

Modifica los valores `rgba()` en el archivo CSS:

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.- `rgba(37, 36, 35, 0.55)` - Transparencia de tarjetas

- `rgba(0, 0, 0, 0.8)` - Intensidad del overlay

## Soporte

### **Personalizar Bordes Redondeados**

Si encuentras problemas o tienes sugerencias:

Cambia los valores de `border-radius`:

1. **Revisa** la sección de [Solución de Problemas](#solución-de-problemas)- `2rem` - Bordes estándar

2. **Busca** en los [Issues existentes](https://github.com/tu-usuario/azure-devops-theme-extension/issues)- `100%` - Elementos circulares

3. **Crea un nuevo Issue** con detalles del problema- `10rem` - Bordes extremadamente redondeados



---## 📋 Estructura de Archivos



**Hecho con cariño para mejorar la experiencia en Azure DevOps**```
azure-devops-theme-extension/
├── manifest.json              # Configuración de la extensión
├── styles.css                # Estilos CSS del tema
├── content.js                # Script de funcionalidad dinámica
├── README.md                 # Esta documentación
└── docs/                     # Documentación adicional
    ├── INSTALL.md            # Guía de instalación detallada
    └── CSP-SOLUTION.md       # Información sobre Content Security Policy
```

## 🐛 Solución de Problemas

### **La extensión no se aplica**
- Verifica que esté **habilitada** en `chrome://extensions/`
- **Recarga la página** de Azure DevOps (Ctrl+F5)
- Revisa que la URL sea `https://dev.azure.com/*`

### **Estilos se pierden al navegar**
- La extensión detecta automáticamente navegación SPA
- Si persiste, **recarga la extensión** desde Chrome Extensions

### **Elementos no se ven correctamente**
- Ajusta las **transparencias** en el CSS
- Verifica la **imagen de fondo** sea accesible
- Prueba **desactivando otras extensiones** temporalmente

### **Problemas de rendimiento**
- La extensión está optimizada para minimal impacto
- Si experimentas lentitud, verifica otras extensiones

## 🔒 Seguridad y Privacidad

- **No recopila datos** personales
- **Solo actúa en Azure DevOps** - dominios especificados en el manifest
- **Cumple con CSP** - Utiliza solo recursos seguros permitidos
- **Código abierto** - Revisable y modificable

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre un Pull Request**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si encuentras problemas o tienes sugerencias:

1. **Revisa** la sección de [Solución de Problemas](#-solución-de-problemas)
2. **Busca** en los [Issues existentes](https://github.com/tu-usuario/azure-devops-theme-extension/issues)
3. **Crea un nuevo Issue** con detalles del problema

---

**Hecho con ❤️ para mejorar la experiencia en Azure DevOps**