async function fetchStudent() {
  const inputId = document.getElementById("studentId").value.trim();
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch("data.json");
    const students = await response.json();

    const student = students.find(s => s.id === inputId);

    if (student) {
      document.getElementById("name").textContent =`  Nom: ${student.name}`;
      document.getElementById("ms1").textContent = student.MS1;
      document.getElementById("ms2").textContent = student.MS2;
      document.getElementById("ms3").textContent = student.MS3;
      document.getElementById("ms4").textContent = student.MS4;
      document.getElementById("ms5").textContent = student.MS5;
      document.getElementById("ms6").textContent = student.MS6;
      document.getElementById("mg").textContent = student.MG;
      document.getElementById("rang").textContent = student.Rang;
      document.getElementById("mention").textContent = getMention(student.MG);
      resultDiv.classList.remove("hidden");
    } else {
      alert("لم يتم العثور على الطالب بهذا الرقم.");
      resultDiv.classList.add("hidden");
    }
  } catch (error) {
    console.error("خطأ في جلب البيانات:", error);
  }
}


function getMention(mg) {
  // Si mg est une chaîne avec une virgule, convertir en nombre
  if (typeof mg === 'string') mg = parseFloat(mg.replace(',', '.'));

  if (mg >= 10 && mg < 12) return "مقبول (Passable)";
  else if (mg >= 12 && mg < 14) return "مستحسن  \n  (Assez-bien)";
  else if (mg >= 14 && mg < 16) return "جيد (Bien)";
  else if (mg >= 16) return "جيد جدا أو ممتاز";
  else return "لم ينجح";
}