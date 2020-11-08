import { contentJoinModel } from './../models/problems/contentJoin';
import { FprobContentModel } from './../models/problems/FproblemContent';
import { probContentModel } from './../models/problems/problemContent';
import { probHeaderModel } from './../models/problems/problemHeader';
import { FproblemTypeModel } from './../models/problems/FproblemType';
import { problemTypeModel } from './../models/problems/problemType';
import { usersModel } from 'src/app/models/users-models';
import { EditUserModel } from './../models/editUserModel';
import {probSourceModel} from './../models/problems/problemSource';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userModel } from '../models/user-model';
import { FprobSourceModel } from '../models/problems/FproblemSource';
import { FprobHeaderModel } from '../models/problems/FproblemHeader';

import { problemJoin } from '../models/problems/problemJoin';
import { GetHeaderFromJoin } from '../models/GetHeaderFromJoin';
import { GetprobContentJ } from '../models/GetprobContentJ';
import { contentByname } from '../models/contentByname';
import { IsAdmin } from '../models/IsAdmin';
import { userDetails } from '../models/usersDetails';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  baseUrl='https://aycodeapi.azurewebsites.net/api/Admin/';
   headers = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem('token')
    );

  GetUsers():Observable<usersModel[]>{
    return this.http.get<usersModel[]>(this.baseUrl+'GetAllUseers',{headers:this.headers}).pipe();
  }

  AddUsers(model:userModel):Observable<userModel>{
    return this.http.post<userModel>(this.baseUrl+'AddNewUser',model,{headers:this.headers}).pipe();
  }

  EditUser(id:string):Observable<usersModel>{
    return this.http.get<usersModel>(this.baseUrl+'EditUser?id='+id,{headers:this.headers}).pipe();
  }

  EditUseRTwo(model:EditUserModel):Observable<usersModel>{
    return this.http.put<usersModel>(this.baseUrl+'EditUseRTwo',model,{headers:this.headers}).pipe();
  }

  DeleteUser(id:string){
      return this.http.post(this.baseUrl+'DeleteUser?id='+id,null,{headers:this.headers}).pipe();
  }

  ////////////////////////Source////////////////////////////
  AddprobSource(model:probSourceModel){
    return this.http.post<probSourceModel>(this.baseUrl+'AddprobSource',model,{headers:this.headers}).pipe();
  }

  EditprobSource(model:FprobSourceModel):Observable<FprobSourceModel>{
    return this.http.put<FprobSourceModel>(this.baseUrl+'EditprobSource',model,{headers:this.headers}).pipe();
  }

  GetAllprobSource():Observable<FprobSourceModel[]>{
    return this.http.get<FprobSourceModel[]>(this.baseUrl+'GetAllprobSource',{headers:this.headers,withCredentials:true});
  }

  GetAllprobSourceUser():Observable<probSourceModel[]>{
    return this.http.get<probSourceModel[]>(this.baseUrl+'GetAllprobSource',{headers:this.headers}).pipe();
  }


  GetprobSource(sourceID:number):Observable<FprobSourceModel>{
    return this.http.post<FprobSourceModel>(this.baseUrl+'GetprobSource?sourceId='+sourceID,null,{headers:this.headers}).pipe();
  }

  DeleteprobSource(id:number){
    return this.http.post(this.baseUrl+'DeleteprobSource?id='+id,null,{headers:this.headers}).pipe();
  }
  //////////////////////////Type////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

  AddprobType(model:problemTypeModel){
    return this.http.post<problemTypeModel>(this.baseUrl+'AddprobType',model,{headers:this.headers}).pipe();
  }

  EditprobType(model:FproblemTypeModel):Observable<FproblemTypeModel>{
    return this.http.put<FproblemTypeModel>(this.baseUrl+'EditprobType',model,{headers:this.headers}).pipe();
  }

  GetAllprobType():Observable<FproblemTypeModel[]>{
    return this.http.get<FproblemTypeModel[]>(this.baseUrl+'GetAllprobType',{headers:this.headers}).pipe();
  }

  GetprobSType(typeId:number):Observable<FproblemTypeModel>{
    return this.http.post<FproblemTypeModel>(this.baseUrl+'GetprobType?id='+typeId,null,{headers:this.headers}).pipe();
  }

  DeleteprobType(id:number){
    return this.http.post(this.baseUrl+'DeleteprobType?id='+id,null,{headers:this.headers}).pipe();
  }

//////////////////////////Header////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

AddprobHeader(model:probHeaderModel){
  return this.http.post<probHeaderModel>(this.baseUrl+'AddprobHeader',model,{headers:this.headers}).pipe();
}

EditprobHeader(model:FprobHeaderModel):Observable<FprobHeaderModel>{
  return this.http.put<FprobHeaderModel>(this.baseUrl+'EditprobHeader',model,{headers:this.headers}).pipe();
}

GetAllprobHeader():Observable<problemJoin[]>{
  return this.http.get<problemJoin[]>(this.baseUrl+'GetAllprobHeader',{headers:this.headers}).pipe();
}

GetprobSHeader(typeId:number):Observable<FprobHeaderModel>{
  return this.http.post<FprobHeaderModel>(this.baseUrl+'GetprobHeader?id='+typeId,null,{headers:this.headers}).pipe();
}

DeleteprobHeader(id:number){
  return this.http.post(this.baseUrl+'DeleteprobHeadr?id='+id,null,{headers:this.headers}).pipe();
}

////////////////////////////////Content////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

AddprobContent(model:probContentModel){
  return this.http.post<probContentModel>(this.baseUrl+'Addprobcontent',model,{headers:this.headers}).pipe();
}

// EditprobContent(model:FprobContentModel):Observable<FprobContentModel>{
//   return this.http.put<FprobContentModel>(this.baseUrl+'EditprobHeader',model,{headers:this.headers}).pipe();
// }

GetAllprobContent():Observable<contentJoinModel[]>{
  return this.http.get<contentJoinModel[]>(this.baseUrl+'GetAllprobcontent',{headers:this.headers}).pipe();
}

GetprobSContent(typeId:number):Observable<FprobContentModel>{
  return this.http.post<FprobContentModel>(this.baseUrl+'Getprobcontent?id='+typeId,null,{headers:this.headers}).pipe();
}

DeleteprobContent(id:number){
  return this.http.post(this.baseUrl+'Deleteprobcontent?id='+id,null,{headers:this.headers}).pipe();
}

/////////////////////////////////////////////////

GetprobHeaderJ(probType:string,probSource:string):Observable<GetHeaderFromJoin[]>{

  return this.http.post<GetHeaderFromJoin[]>(this.baseUrl+'GetprobHeaderJ?probType='+probSource+'&'+'probSource='+probType,null,{headers:this.headers});
}


GetprobContentJ(probHeaderName:string):Observable<GetprobContentJ[]>{
  return this.http.post<GetprobContentJ[]>(this.baseUrl+'GetprobContentJ?probType='+probHeaderName,null,{headers:this.headers}).pipe();
}

GetprobContentByName(probContentName:string):Observable<contentByname>{
  console.log(this.baseUrl+'GetprobcontentbyName?probName='+probContentName);
  return this.http.post<contentByname>(this.baseUrl+'GetprobcontentbyName?probName='+probContentName,null,{headers:this.headers}).pipe();
}

IsAdmin():Observable<IsAdmin>{
  return this.http.get<IsAdmin>(this.baseUrl+'IsAdmin',{headers:this.headers}).pipe();
}


GetAllUserData():Observable<userDetails>{
  return this.http.get<userDetails>(this.baseUrl+'GetAllUserData',{headers:this.headers}).pipe();
}


}

