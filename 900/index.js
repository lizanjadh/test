async function loadMultipleModules(files) {
  try {
    // Dynamically import all modules
    const modules = await Promise.all(files.map(file => import(file)));
    return modules; // array of imported modules
  } catch (error) {
    console.error("Error loading modules:", error);
    throw error;
  }
}

async function jailbreak() {
  try {
    const modules = await loadMultipleModules([
      './alert.mjs'
    ]);
    console.log("All modules are loaded!");

    const goldhenModule = modules[0];
    if (goldhenModule && typeof goldhenModule.GoldHEN === 'function') {
      goldhenModule.GoldHEN();
    } else {
      console.error("GoldHEN function not found in goldhen.js module");
    }
  } catch (e) {
    console.error("Failed to jailbreak:", e);
  }
}

document.getElementById('jailbreak').addEventListener('click', () => {
  jailbreak();
});

document.querySelectorAll('button[data-func]').forEach(button => {
  button.addEventListener('click', () => {
    const payload = button.getAttribute('data-func');
    Loadpayloads(payload);
  });
});
  const visibleDiv = localStorage.getItem('visibleDiv') || 'jailbreak-page';
  if (visibleDiv === 'jailbreak-page') {
    document.getElementById('jailbreak-page').style.display = 'block';
  } else {
    document.getElementById('jailbreak-page').style.display = 'none';
    localStorage.setItem('visibleDiv', 'payloads-page');
  }
});

checkbox.addEventListener('change', (e) => {
  alert("WARNING :\nThis option make the jailbreak unstable and this option is not recommended please use the jailbreak button instead !")
  localStorage.setItem('autogoldhenstate', e.target.checked);
  onCheckboxChange(e.target.checked);
});
