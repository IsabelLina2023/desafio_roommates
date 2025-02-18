import fs from "fs";

export const addSpentQuery = async (newSpent) => {
  try {
    const gastos = JSON.parse(
      fs.readFileSync("./data/gastos.json", "utf-8")
    );
    gastos.gastos.push(newSpent);
    fs.writeFileSync("./data/gastos.json", JSON.stringify(gastos));
    return gastos;
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  };
};

export const getSpentQuery = async () => {
  try {
    const gastos = JSON.parse(
      fs.readFileSync("./data/gastos.json", "utf-8")
    );
    return gastos;
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  };
};

export const updateSpentQuery = async (newSpent) => {
  const { id } = newSpent;
  try {
    let { gastos } = JSON.parse(fs.readFileSync("./data/gastos.json", "utf-8"));
    gastos = gastos.map((gasto) => {
      if (gasto.id === id) {
        return newSpent;
      } else {
        return gasto;
      };
    });
    fs.writeFileSync("./data/gastos.json", JSON.stringify({ gastos }));
    return gastos;
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  };
};

export const deleteSpentQuery = async (id) => {
  try {
    let { gastos } = JSON.parse(fs.readFileSync("./data/gastos.json", "utf-8"));

    gastos = gastos.filter((gasto) => gasto.id !== id);
    fs.writeFileSync("./data/gastos.json", JSON.stringify({ gastos }));
    return gastos;
  } catch (error) {
    console.log("Error code: ", error.code, "Error message: ", error.message);
  };
};

export const recalculateSpentQuery = () => {

  const { gastos } = JSON.parse(fs.readFileSync("./data/gastos.json", "utf-8"));
  const { roommates } = JSON.parse(fs.readFileSync("./data/roommates.json", "utf-8"));

  roommates.forEach((r) => {
    r.debe = 0;
    r.recibe = 0;
    r.total = 0;
  });

  gastos.forEach((g) => {
    const monto = g.monto / roommates.length;

    roommates.forEach((r) => {
      if (g.roommate === r.nombre) {
        r.recibe += monto * (roommates.length - 1);
      } else {
        r.debe -= monto;
      };
      r.total = r.recibe - r.debe;
    });
  });

  fs.writeFileSync("./data/roommates.json", JSON.stringify({ roommates }));

};