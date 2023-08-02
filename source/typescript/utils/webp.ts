import supportsWebP from 'supports-webp';

supportsWebP.then(supported => document.body.classList.toggle('no-webp', !supported))
