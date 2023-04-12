import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList: any = [ 
    {
      title: 'Home',
      icon: 'home',
      subMenu: [],
      url: 'home/search'
    },
    {
      title: 'Master Data',
      icon: 'layers',
      url: '',
      subMenu: [ {
        title: 'Assembly',
        icon: 'account_balance',
        url: '/home/masterdata/assembly-list'
      },
      {
        title: 'Session Type',
        icon: 'meeting_room',
        url: '/home/masterdata/session-types'
      },
      {
        title: 'Session Management',
        icon: 'manage_accounts',
        url: '/home/masterdata/session-management'
      }]
    },
    {
      title: 'Data Digitization',
      icon: 'attach_file',
      url: '',
      subMenu: [ {
        title: 'Data Entry List',
        icon: 'grid_view',
        url: '/home/digitization/data-entry-list'
      },
      {
        title: 'User Defined Data',
        icon: 'subject',
        url: '/home/digitization/user-defined'
      },
      {
        title: 'Dynamic Data Fields',
        icon: 'date_range',
        url: '/home/digitization/dynamic-fields'
      }]
    },
    {
      title: 'User Management',
      icon: 'people',
      url: '',
      subMenu: [ {
        title: 'All Users',
        icon: 'grid_on',
        url: '/home/users/allusers'
      },
      {
        title: 'Add New User',
        icon: 'person_add',
        url: '/home/users/manage-user'
      }]
    },
    {
      title: 'Settings',
      icon: 'settings',
      url: '',
      subMenu: [{
        title: 'Theme',
        icon: 'color_lens',
        url: ''
      }]
    }
  ]
  public selectedMenu: any = {
    title: 'User Management',
    icon: 'people',
    url: '',
    subMenu: [ {
      title: 'All Users',
      icon: 'grid_on',
      url: ''
    },
    {
      title: 'Add New User',
      icon: 'person_add',
      url: ''
    }]
  };
  public toggleMenu: boolean = false;
  constructor(public router: Router) {
    
  }

  ngOnInit(): void {  
    
  }

  triggerSubmenuClose() {
    this.toggleMenu = !this.toggleMenu;
  }

  toggleSubMenu(icons: any, previousIcons: any) {
    if(icons?.subMenu?.length === 0 && icons?.url !== '') {
      this.router.navigateByUrl(icons.url);
    } else {
      if (icons?.icon === previousIcons?.icon) {
        this.toggleMenu = !this.toggleMenu;
      } else {
        this.toggleMenu = true;
        this.selectedMenu = icons;
      } 
    }
     
  }

  redirectUrl(url: string) {
    this.router.navigateByUrl(url);
    this.toggleMenu = false;
  }

  

}
