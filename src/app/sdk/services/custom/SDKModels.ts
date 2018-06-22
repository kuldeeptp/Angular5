/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Tradelogs } from '../../models/Tradelogs';
import { Container } from '../../models/Container';
import { Feed } from '../../models/Feed';
import { Nseoptionchain } from '../../models/Nseoptionchain';
import { Article } from '../../models/Article';
import { Code } from '../../models/Code';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Tradelogs: Tradelogs,
    Container: Container,
    Feed: Feed,
    Nseoptionchain: Nseoptionchain,
    Article: Article,
    Code: Code,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
