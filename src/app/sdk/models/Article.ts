/* tslint:disable */

declare var Object: any;
export interface ArticleInterface {
  "id"?: any;
  "feedId"?: string;
  "title"?: string;
  "author"?: string;
  "link"?: string;
  "content"?: string;
  "type"?: string;
  "guid"?: string;
  "published"?: Date;
}

export class Article implements ArticleInterface {
  "id": any;
  "feedId": string;
  "title": string;
  "author": string;
  "link": string;
  "content": string;
  "type": string;
  "guid": string;
  "published": Date;
  constructor(data?: ArticleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Article`.
   */
  public static getModelName() {
    return "Article";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Article for dynamic purposes.
  **/
  public static factory(data: ArticleInterface): Article{
    return new Article(data);
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
      name: 'Article',
      plural: 'articles',
      path: 'articles',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "feedId": {
          name: 'feedId',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "author": {
          name: 'author',
          type: 'string'
        },
        "link": {
          name: 'link',
          type: 'string'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "guid": {
          name: 'guid',
          type: 'string'
        },
        "published": {
          name: 'published',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
