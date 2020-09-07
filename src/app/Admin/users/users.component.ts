import { IndexeddbService } from './../../services/indexeddb.service';
import { HttpClient } from '@angular/common/http';
import { usersModel } from './../../models/users-models';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private adminServ : AdminService,private http:HttpClient, private router: Router,private update:SwUpdate,private IndexeddbService:IndexeddbService) {
    this.updateClient();
   }
  UserAdd:boolean;
  users:usersModel[];
  popoverTitle:string;
  popoverMessage:string;
  // rowData:any;
  // columnDefs = [
  //   {headerName: 'id', field: 'id', checkboxSelection: true },
  //   {headerName: 'User name', field: 'userName',sortable: true,filter: 'agTextColumnFilter'},
  //   {headerName: 'Email', field: 'email',sortable: true },
  //   {headerName: 'Email Confirmed', field: 'emailConfirmed',sortable: true },
// ];

  ngOnInit(): void {
      this.users=null;
      this.popoverTitle="Confirm Delete";
      this.popoverMessage="Are you sure?";
      this.adminServ.GetUsers().subscribe(sucess=>{
          // this.rowData=sucess;
          this.users=sucess;
          console.log(this.users);
      },err=>{
        console.log(err);
      })
}

////////////////////PWA///////////////////////
updateClient(){
  if(!this.update.isEnabled){
    console.log('Not Enabled');
    return;
  }
  this.update.available.subscribe(event=>{
    console.log('current',event.current,'available',event.available);

  });

  this.update.available.subscribe(event=>{
    console.log('current',event.current,'available',event.available);
    if (confirm('update availabe for the app please conform')){
      this.update.activateUpdate().then(()=>location.reload());
      console.log("bbbbbbbbb");

    }
  });
}

backgroundSync(){
  navigator.serviceWorker.ready.then((swRegisteration) => swRegisteration.sync.register('post-data'))
  .catch(console.log);
  console.log("background sync");
}

/////////////////////////////////////////////

Adduser(){
  this.router.navigate(['/Adduser']);
}
EditUserClick(id:string){

  this.router.navigate(['/edituser',id]);
  
}

DeleteUserClick(idd:string){

  this.adminServ.DeleteUser(idd).subscribe(succs=>{
      console.log("deleted");
  },erro=>{

      this.IndexeddbService
      .addID(idd)
      .then(this.backgroundSync)
      .catch(console.log);

  })

    this.adminServ.GetUsers().subscribe(sucess=>{
      // this.rowData=sucess;
      this.users=sucess;
      console.log(this.users);
  },err=>{
    console.log(err);
  })
}
}

