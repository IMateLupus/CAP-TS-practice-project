// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './..';
import * as __ from './../_';

// the following represents the CDS aspect 'managed'
export function _managedAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class managed extends Base {
    declare createdAt?: __.DeepRequired<_.managed>['createdAt'] | null
    /** Canonical user ID */
    declare createdBy?: __.DeepRequired<_.managed>['createdBy'] | null
    declare lastChangedAt?: __.DeepRequired<_.managed>['modifiedAt'] | null
    /** Canonical user ID */
    declare lastChangedBy?: __.DeepRequired<_.managed>['modifiedBy'] | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<managed>;
    declare static readonly elements: __.ElementsOf<managed>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class managed extends _managedAspect(__.Entity) {}
export class managed_ extends Array<managed> {$count?: number}
Object.defineProperty(managed_, 'name', { value: 'custom.managed' })