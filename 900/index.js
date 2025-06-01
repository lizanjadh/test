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