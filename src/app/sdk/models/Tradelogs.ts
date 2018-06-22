/* tslint:disable */

declare var Object: any;
export interface TradelogsInterface {
  "id"?: number;
  "code"?: string;
  "codedesc": string;
  "action"?: string;
  "strike"?: string;
  "expiry"?: string;
  "type"?: string;
  "entryprice": string;
  "stop"?: string;
  "status": string;
  "details": string;
  "lastupdated"?: string;
  "entrydate": string;
  "tradetype": string;
}

export class Tradelogs implements TradelogsInterface {
  "id": number;
  "code": string;
  "codedesc": string;
  "action": string;
  "strike": string;
  "expiry": string;
  "type": string;
  "entryprice": string;
  "stop": string;
  "status": string;
  "details": string;
  "lastupdated": string;
  "entrydate": string;
  "tradetype": string;
  constructor(data?: TradelogsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tradelogs`.
   */
  public static getModelName() {
    return "Tradelogs";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tradelogs for dynamic purposes.
  **/
  public static factory(data: TradelogsInterface): Tradelogs{
    return new Tradelogs(data);
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
      name: 'Tradelogs',
      plural: 'Tradelogs',
      path: 'Tradelogs',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "codedesc": {
          name: 'codedesc',
          type: 'string'
        },
        "action": {
          name: 'action',
          type: 'string'
        },
        "strike": {
          name: 'strike',
          type: 'string'
        },
        "expiry": {
          name: 'expiry',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "entryprice": {
          name: 'entryprice',
          type: 'string'
        },
        "stop": {
          name: 'stop',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "details": {
          name: 'details',
          type: 'string'
        },
        "lastupdated": {
          name: 'lastupdated',
          type: 'string'
        },
        "entrydate": {
          name: 'entrydate',
          type: 'string'
        },
        "tradetype": {
          name: 'tradetype',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
