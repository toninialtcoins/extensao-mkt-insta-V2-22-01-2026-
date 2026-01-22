document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 10px; border-top: 1px solid #eee; background: #f9f9f9; font-family: sans-serif;';
    container.innerHTML = `
      <label style="font-weight: bold; font-size: 12px; color: #333; display: block; margin-bottom: 5px;">🛡️ Perfis Protegidos (Whitelist)</label>
      <textarea id="whitelist_input" placeholder="usuario1, usuario2..." style="width: 100%; height: 50px; font-size: 11px; border: 1px solid #ccc; border-radius: 4px; padding: 5px; box-sizing: border-box; resize: none;"></textarea>
      <button id="save_whitelist" style="width: 100%; background: #409eff; color: white; border: none; padding: 5px; border-radius: 4px; cursor: pointer; font-size: 12px; margin-top: 5px;">Salvar Lista</button>
    `;
    app.parentNode.appendChild(container);

    const input = document.getElementById('whitelist_input');
    const button = document.getElementById('save_whitelist');

    chrome.storage.local.get('whitelist_profiles', (data) => {
      if (data.whitelist_profiles) input.value = data.whitelist_profiles;
    });

    button.addEventListener('click', () => {
      chrome.storage.local.set({ 'whitelist_profiles': input.value }, () => {
        alert('Lista salva!');
      });
    });
  }
});
