import { Injectable } from '@angular/core';

type Name = 'Name' | 'Lastname'
type Validate = 'Save' | 'Load'

@Injectable({
  providedIn: 'root'
})
export class ValidateCharacterService {

  constructor() {
    this.Form
  }

  Form = {
    Name: {
      // Base Name:
      Base: /^((?!^[#\(\)\-\.\s])(?![#\(\)\-\.\s]{2,})[0-9A-ZÑa-zñ#\(\)\-\.\s]){1,}$/,
      // No init Special Character:
      // Init Special Characters:
      InitSCharacter: /^([#\(\)\-\.\s])/,
      // Consecutive Special Characters:
      MultiSCharacter: /[#\(\)\-\.\s]{2,}/,
      // Acent Characters:
      AcentCharacters: /[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/,
      // Character Special not allowed
      CharacterSNoAllowed: /[!"$-'*-,\/:-@\[-\^`\{-~¿¡°]/,
      // Multi-Space characters:
      MultiSpace: /[\s]{2,}/,
    },

  }

  /*****************************************************************************************/
  /*****************************      Id NUMBRE VALIDATE       *****************************/
  /*****************************************************************************************
   * ValidateCC: Validate the ID field
   * @param Id : string | number
   * @returns [{ state: boolean, message: string }]
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidateId(Id: number): { state: boolean, message: string } {
    if (Id == null) {
      return { state: false, message: "The Id is required." }
    }

    if (Id <= 0) {
      return { state: false, message: "The id value must be greater than 0" }
    }

    return { state: true, message: " " }
  }

  /*****************************************************************************************/
  /*****************************                NAME           *****************************/
  /******************************************************************************************
   * ValidateName: Validate the Name or Lastname
   * @param Name String input variable
   * @param Type Type of field to validate: 'Name' (default) || 'Lastname'.
   * @returns [{ state: boolean, message: string }]
   * state: false (error) || true (success)
   * message: "<error description>" (state:false) || "" (state:true)
   */
  ValidateName(Name: string): { state: boolean, message: string } {
    // This field is required.
    if (Name.trim() == "" || Name.trim() == null || Name.trim() == undefined) {
      return { state: false, message: `The name is required.` }
    }
    if (this.Form.Name.MultiSpace.test(Name.trim()) == true) {
      return { state: false, message: `Delete multi-spaces between names.` }
    }

    if (this.Form.Name.MultiSpace.test(Name.trim())) {
      return { state: false, message: `Delete multi-spaces between names.` }
    }

    // The email must not start with a special characters.
    if (this.Form.Name.InitSCharacter.test(Name.trim()) == true) {
      return { state: false, message: "Remove special characters at start." }
    }

    // The email must not start with a special characters.
    if (this.Form.Name.MultiSCharacter.test(Name.trim()) == true) {
      return { state: false, message: "Remove consecutive special characters." }
    }

    if (this.Form.Name.CharacterSNoAllowed.test(Name.trim()) == true) {
      return { state: false, message: 'Only the special characters "# ( ) . -" are allowed.' }
    }
    return { state: true, message: '' }
  }
}
