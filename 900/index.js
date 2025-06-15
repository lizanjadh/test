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

async function jailbreak2() {
  try {
    const modules = await loadMultipleModules([
      './alert2.mjs'
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

document.getElementById('jailbreak2').addEventListener('click', () => {
  jailbreak2();
});

const checkbox = document.getElementById('autogoldhen');

function onCheckboxChange(checked) {
  if (checked) {
    console.log('Checkbox is checked!');
  } else {
    console.log('Checkbox is unchecked!');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('autogoldhenstate');
  if (saved !== null) {
    checkbox.checked = saved === 'true';
    onCheckboxChange(checkbox.checked);
  }

  if (checkbox.checked) {
    if (confirm('The jailbreak is going to start please confirm !\nWARNING :\nThis option make the jailbreak unstable and this option is not recommended please use the jailbreak button instead !')) {
      jailbreak();
    }
  }

    if (checkbox.checked) {
    if (confirm('The jailbreak is going to start please confirm !\nWARNING :\nThis option make the jailbreak unstable and this option is not recommended please use the jailbreak button instead !')) {
      jailbreak2();
    }
  }

  const visibleDiv = localStorage.getItem('visibleDiv')
});

checkbox.addEventListener('change', (e) => {
  alert("WARNING :\nThis option make the jailbreak unstable and this option is not recommended please use the jailbreak button instead !")
  localStorage.setItem('autogoldhenstate', e.target.checked);
  onCheckboxChange(e.target.checked);
});
