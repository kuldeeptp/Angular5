/* tslint:disable */

declare var Object: any;
export interface FeedInterface {
  "id"?: any;
  "type"?: string;
  "name"?: string;
  "url"?: string;
  "icon_image_url"?: string;
  "last_access"?: Date;
}

export class Feed implements FeedInterface {
  "id": any;
  "type": string;
  "name": string;
  "url": string;
  "icon_image_url": string;
  "last_access": Date;
  constructor(data?: FeedInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Feed`.
   */
  public static getModelName() {
    return "Feed";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Feed for dynamic purposes.
  **/
  public static factory(data: FeedInterface): Feed{
    return new Feed(data);
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
      name: 'Feed',
      plural: 'feeds',
      path: 'feeds',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "icon_image_url": {
          name: 'icon_image_url',
          type: 'string'
        },
        "last_access": {
          name: 'last_access',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
