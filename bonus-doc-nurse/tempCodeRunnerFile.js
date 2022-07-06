function bonus(employee, premium) {
  let bonuses = 0;
  const ted = {
    profession: "nurse",
    experience: "12",
  };

  if (employee.profession === "doctor" && employee.experience < 10) {
    bonuses = premium * 1.5;
  } else if (employee.profession === "doctor" && employee.experience >= 10) {
    bonuses = premium * 2;
    if (bonuses >= 1000) {
      throw new Error("Too much dough");
    }
  } else if (employee.profession === "doctor" && employee.experience >= 20) {
    bonuses = premium * 3;
    if (bonuses >= 1000) {
      throw new Error("Too much dough");
    }
  } else if (employee.profession === "nurse" && employee.experience < 10) {
    bonuses = premium * 1.2;

    if (bonuses >= 500) {
      throw new Error("Too much dough");
    }
  } else if (employee.profession === "nurse" && employee.experience >= 10) {
    bonuses = premium * 1.3;

    if (bonuses >= 500) {
      throw new Error("Too much dough");
    }
  } else if (employee.profession === "nurse" && employee.experience >= 15) {
    bonuses = premium * 1.5;

    if (bonuses >= 500) {
      throw new Error("Too much dough");
    }
  } else if (employee.profession === "nurse" && employee.experience >= 20) {
    bonuses = premium * 1.7;
    if (bonuses >= 500) {
      throw new Error("Too much dough");
    }
  }
  return Math.floor(bonuses);
}

const tia = {
  profession: "nurse",
  experience: "9",
};
console.log(bonus(tia, 200));
