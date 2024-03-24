'use client'
import useSimpleForm from "@/hooks/useSimpleForm";
import { paymentMethods } from "@/utils/steps";

import * as SC from "../../styled-components/styles"

export default function FormOrderPage (){
      const { payMethod, address, description, onChange, handleSelectChange } =
        useSimpleForm();
return (
  <>
    <SC.FieldsContainer>
      <SC.FieldContainer>
        <label>Método de pago</label>
        <select
          name="payMethod"
          value={payMethod}
          onChange={handleSelectChange}
        >
          <option disabled value="">
            Selecciona un método de pago
          </option>
          {paymentMethods.map(({ label, value }) => (
            <option value={value} key={label}>
              {label}
            </option>
          ))}
        </select>
      </SC.FieldContainer>
      <SC.FieldContainer>
        <label>Dirección</label>
        <input
          name="address"
          type="address"
          placeholder="ej: carrera 1 # 40-12"
          value={address}
          onChange={onChange}
        />
      </SC.FieldContainer>
      <SC.FieldContainer>
        <label>Descripción</label>
        <textarea
          value={description}
          name="description"
          placeholder="ej: Edificio 1 apt 02 - Pago por transferencia"
          onChange={onChange}
          maxLength={200}
        />
      </SC.FieldContainer>
    </SC.FieldsContainer>
  </>
);
}