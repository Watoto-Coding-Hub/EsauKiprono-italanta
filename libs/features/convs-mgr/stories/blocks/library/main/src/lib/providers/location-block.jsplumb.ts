import { ComponentRef } from '@angular/core';
import { BrowserJsPlumbInstance } from '@jsplumb/browser-ui';

import { LocationMessageBlock } from '@app/model/convs-mgr/stories/blocks/messaging';

import { BlockComponent } from "@app/features/convs-mgr/stories/blocks/library/main";

/**
 * Decorates MessageBlock with JS plumb connectors.
 * 
 * @param block   - TextMessageBlock data structure.
 * @param comp    - Angular component within the viewport 
 * @param jsPlumb - Active jsPlumb instance
 * 
 * @see {_JsPlumbComponentDecorator} - Should be the only one calling the component
 */
export function _LocationBlockDecoratePlumb(block: LocationMessageBlock, comp: ComponentRef<BlockComponent>, jsPlumb: BrowserJsPlumbInstance) : ComponentRef<BlockComponent> 
{

  jsPlumb.addEndpoint(comp.location.nativeElement, {
    // Whether the anchor is target (Other Block -> This Block)
    target: true,

    endpoint: 'Rectangle',
    anchor: "Left"
  });

  return comp;
}