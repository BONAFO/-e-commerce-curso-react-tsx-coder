import PayInfoType from "@/types/payInfo";

interface PayFormData {
  DNI: string;
}

export const payValidationsForm = (formData: PayFormData): boolean => {
  let validator = true;
  if (formData.DNI.length !== 8) {
    validator = false;
  }
  return validator;
};

export const payFormSelection = (payInfo: PayInfoType) => {
  const fieldsSelected: Record<string, unknown> = {};

  switch (payInfo.payMethod) {
    case 1: // Tarjeta Débito
    case 2: // Tarjeta Crédito
      fieldsSelected.payProcessor = payInfo.payProcessor;
      fieldsSelected.cardNumber = payInfo.cardNumber?.slice(
        payInfo.cardNumber!.length - 4
      );
    case 3: // Efectivo
    case 4: // Transferencia
      fieldsSelected.dni = payInfo.DNI;
      fieldsSelected.fullName = payInfo.fullName;
      fieldsSelected.phone = payInfo.phone;
      fieldsSelected.email = payInfo.email;
      fieldsSelected.address = payInfo.address;
      fieldsSelected.payMethod = payInfo.payMethod;
      break;

    default:
      break;
  }

  return fieldsSelected;
};
