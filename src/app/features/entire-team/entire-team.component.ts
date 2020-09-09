import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-entire-team',
  templateUrl: './entire-team.component.html',
    providers: [MessageService],
    styleUrls: ['./entire-team.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EntireTeamComponent { 
    data1: TreeNode[];
    
    data2: TreeNode[];
    
    selectedNode: TreeNode;
    
    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.data1 = [{
            label: 'Patrice Giraud',
            type: 'person',
            styleClass: 'ui-person',
            expanded: true,
            data: {name:'Head of Global B&Ps KI Tools (SSC)'},
            children: [
                {
                    label: 'Jerome Galliere',
                    type: 'person',
                    styleClass: 'ui-person',
                    expanded: true,
                    data: {name:'Global B&PS KI Tools (SSC) Business Owner'},
                    // children:[{
                    //     label: 'Tax',
                    //     styleClass: 'department-cfo'
                    // },
                    // {
                    //     label: 'Legal',
                    //     styleClass: 'department-cfo'
                    // }],
                },
                {
                    label: 'Johann Le Cunf',
                    type: 'person',
                    styleClass: 'ui-person',
                    expanded: true,
                    data: {name:'Global B&PS KI Tools (SSC) Business Owner'},
                    // children:[{
                    //     label: 'Operations',
                    //     styleClass: 'department-coo'
                    // }]
                },
                
                {
                    label: 'Swapnil Khedekar',
                    type: 'person',
                    styleClass: 'ui-person',
                    expanded: true,
                    data: {name:'Manager KI Tools (SSC)'},
                    // children:[{
                    //     label: 'Development',
                    //     styleClass: 'department-cto',
                    //     expanded: true,
                    //     children:[{
                    //         label: 'Analysis',
                    //         styleClass: 'department-cto'
                    //     },
                    //     {
                    //         label: 'Front End',
                    //         styleClass: 'department-cto'
                    //     },
                    //     {
                    //         label: 'Back End',
                    //         styleClass: 'department-cto'
                    //     }]
                    // },
                    // {
                    //     label: 'QA',
                    //     styleClass: 'department-cto'
                    // },
                    // {
                    //     label: 'R&D',
                    //     styleClass: 'department-cto'
                    // }]
                },
                {
                    label: 'Tjakko Tjakkes',
                    type: 'person',
                    styleClass: 'ui-person',
                    expanded: true,
                    data: {name:'Global B&PS KI Tools (SSC) Business Owner'},
                    // children:[{
                    //     label: 'Operations',
                    //     styleClass: 'department-coo'
                    // }]
                },
                {
                    label: 'Krupali Rodrigues',
                    type: 'person',
                    styleClass: 'ui-person',
                    expanded: true,
                    data: {name:'B&PS KI Tools PMO'},
                    // children:[{
                    //     label: 'Operations',
                    //     styleClass: 'department-coo'
                    // }]
                },
            ]
        }];
        
        this.data2 = [{
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                        {
                            label: 'Chelsea FC'
                        },
                        {
                            label: 'F.C. Barcelona'
                        }
                    ]
                },
                {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                        {
                            label: 'Bayern Munich'
                        },
                        {
                            label: 'Real Madrid'
                        }
                    ]
                }
            ]
        }];
    }
    
    onNodeSelect(event) {
        this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
    }
}
