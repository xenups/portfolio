import React, { Component } from 'react'
import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import DatePicker from 'react-persian-calendar-date-picker';
import TreeMenu from 'react-simple-tree-menu';
import '../../node_modules/react-simple-tree-menu/dist/main.css'


const treeData = [
    {
      key: 'About',
      label: 'About',
      nodes: [
        {
          key: 'second-level-node-1',
          label: 'Node 1 at the second level',
          url:"google.com",
          nodes: [
            {
              key: 'third-level-node-1',
              label: 'Last node of the branch',
              nodes: [] // you can remove the nodes property or leave it as an empty array
            },
          ],
        },
      ],
    },
    {
      key: 'Bio',
      label: 'Bio',
    },
  ];
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <TreeMenu data={treeData} />
        
        <section className="colorlib-about" data-section="about">
        


        </section>
      </div>
    )
  }
}