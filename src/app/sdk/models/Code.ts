/* tslint:disable */

declare var Object: any;
export interface CodeInterface {
  "Underlying"?: string;
  "Code"?: string;
  "Lot"?: number;
  "Type"?: number;
  "id"?: any;
}

export class Code implements CodeInterface {
  "Underlying": string;
  "Code": string;
  "Lot": number;
  "Type": number;
  "id": any;
  constructor(data?: CodeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Code`.
   */
  public static getModelName() {
    return "Code";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Code for dynamic purposes.
  **/
  public static factory(data: CodeInterface): Code{
    return new Code(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Code',
      plural: 'code',
      path: 'code',
      idName: 'id',
      properties: {
        "Underlying": {
          name: 'Underlying',
          type: 'string'
        },
        "Code": {
          name: 'Code',
          type: 'string'
        },
        "Lot": {
          name: 'Lot',
          type: 'number'
        },
        "Type": {
          name: 'Type',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
