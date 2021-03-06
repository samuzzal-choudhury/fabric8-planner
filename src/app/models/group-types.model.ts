import { CommonModule } from '@angular/common';
import {
  Mapper,
  MapTree,
  switchModel,
  modelUI,
  modelService
} from './common.model';

export class GroupTypesModel extends modelService {
  attributes: WITGroupAttributes;
  links?: {
    related: string;
  };
  relationships?: WorkItemRelations;
}

export class WITGroupAttributes {
  bucket: string;
  level: number[];
  icon: string;
  sublevel?: number;
  group: string;
  name: string;
  ['show-in-sidebar']: boolean;
}

export class WorkItemRelations {
  defaultType?: {
    data?: object,
    links?: object
  };
  nextGroup?: {
    data?: object,
    links?: object
  };
  spaceTemplate?: {
    data?: object,
    links?: object
  };
  typeList?: {
    data?: TypeListData[]
  }
}

export class TypeListData {
  id: string;
  workitemtype: string;
}

export interface GroupTypeService extends GroupTypesModel {}

// id: id
// name: attributes / name
export interface GroupTypeUI extends modelUI {
  bucket: string; // attributes / bucket
  level: number[]; // attributes / level
  icon: string; // attributes / icon
  sublevel?: number; // attributes / sublevel
  group: string; // attributes / group
  selected: boolean;
  showInSideBar: boolean; // attributes / show-in-sidebar
  typeList: TypeListData[]; // relationships / typeList / data
}

export class GroupTypeMapper implements Mapper<GroupTypeService, GroupTypeUI> {

  serviceToUiMapTree: MapTree = [{
      fromPath: ['id'],
      toPath: ['id']
    },{
      fromPath: ['attributes', 'name'],
      toPath: ['name']
    }, {
      fromPath: ['attributes', 'bucket'],
      toPath: ['bucket']
    }, {
      fromPath: ['attributes', 'level'],
      toPath: ['level']
    }, {
      fromPath: ['attributes', 'icon'],
      toPath: ['icon']
    }, {
      fromPath: ['attributes', 'sublevel'],
      toPath: ['sublevel']
    }, {
      fromPath: ['attributes', 'group'],
      toPath: ['group']
    }, {
      toPath: ['selected'],
      toValue: false
    }, {
      fromPath: ['attributes', 'show-in-sidebar'],
      toPath: ['showInSideBar']
    }, {
      fromPath: ['relationships', 'typeList', 'data'],
      toPath: ['typeList']
    }];

  uiToServiceMapTree: MapTree = [{
    fromPath: ['id'],
    toPath: ['id']
  },{
    fromPath: ['name'],
    toPath: ['attributes', 'name']
  }, {
    fromPath: ['bucket'],
    toPath: ['attributes', 'bucket']
  }, {
    fromPath: ['level'],
    toPath: ['attributes', 'level'],
  }, {
    fromPath: ['icon'],
    toPath: ['attributes', 'icon'],
  }, {
    fromPath: ['sublevel'],
    toPath: ['attributes', 'sublevel'],
  }, {
    fromPath: ['group'],
    toPath: ['attributes', 'group'],
  }, {
    fromPath: ['showInSideBar'],
    toPath: ['attributes', 'show-in-sidebar'],
  }, {
    fromPath: ['typeList'],
    toPath: ['relationships', 'typeList', 'data'],
  }, {
    toPath: ['type'],
    toValue: 'grouptypes'
  }];


  toUIModel(arg: GroupTypeService): GroupTypeUI {
    return switchModel<GroupTypeService, GroupTypeUI>(
      arg, this.serviceToUiMapTree
    )
  }

  toServiceModel(arg: GroupTypeUI): GroupTypeService {
    return switchModel<GroupTypeUI, GroupTypeService>(
      arg, this.uiToServiceMapTree
    )
  }
}
