/* tslint:disable */

declare var Object: any;
export interface NseoptionchainInterface {
  "instrument_token"?: number;
  "id"?: any;
}

export class Nseoptionchain implements NseoptionchainInterface {
  "instrument_token": number;
  "id": any;
  constructor(data?: NseoptionchainInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Nseoptionchain`.
   */
  public static getModelName() {
    return "Nseoptionchain";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Nseoptionchain for dynamic purposes.
  **/
  public static factory(data: NseoptionchainInterface): Nseoptionchain{
    return new Nseoptionchain(data);
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
      name: 'Nseoptionchain',
      plural: 'nseoptionchain',
      path: 'nseoptionchain',
      idName: 'id',
      properties: {
        "instrument_token": {
          name: 'instrument_token',
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
