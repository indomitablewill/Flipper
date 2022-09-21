/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {Id, UINode} from '../types';
import {DataNode} from 'antd/es/tree';
import {Tree as AntTree, Typography} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import React from 'react';

export function Tree(props: {
  rootId: Id;
  nodes: Map<Id, UINode>;
  setSelectedNode: (id: Id) => void;
}) {
  const [antTree, inactive] = nodesToAntTree(props.rootId, props.nodes);

  return (
    <AntTree
      showIcon
      showLine
      onSelect={(selected) => {
        props.setSelectedNode(selected[0] as Id);
      }}
      defaultExpandAll
      expandedKeys={[...props.nodes.keys()].filter(
        (key) => !inactive.includes(key),
      )}
      switcherIcon={<DownOutlined />}
      treeData={[antTree]}
    />
  );
}

function nodesToAntTree(root: Id, nodes: Map<Id, UINode>): [DataNode, Id[]] {
  const inactive: Id[] = [];

  function uiNodeToAntNode(id: Id): DataNode {
    const node = nodes.get(id);

    if (node?.activeChild) {
      for (const child of node.children) {
        if (child !== node?.activeChild) {
          inactive.push(child);
        }
      }
    }

    return {
      key: id,
      title: node?.name,
      children: node?.children.map((id) => uiNodeToAntNode(id)),
    };
  }

  return [uiNodeToAntNode(root), inactive];
}