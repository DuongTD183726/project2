
import React from 'react';
import "./App.css"

class App extends React.Component {
    render(){
        return(
          <div class="container-fluid">
                <div>
                   Quản Lý Công Việc<hr/>
                </div>
                 
                <div class="row">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="panel panel-warning">
                                   <div class="panel-heading">
                                       <h3 class="panel-title">
                                            <span className="fa fa-times-circle text-right">
                                            </span>
                                       </h3>
                                   </div>
                                   <div class="panel-body">
                                        <form>
                                
                                            <div class="form-group">
                                                <label>Ten</label>
                                                <input 
                                                    type="text" 
                                                    class="form-control" 
                                                    name="name"
                                            
                                                />
                                            </div>
                                            
                                            <div class="form-group">
                                                <label>Trang Thai</label>
                                                <select 
                                                    name="status" 
                                                    class="form-control"
                                                    
                                                >
                                                    <option value={true}>Kich Hoat</option>
                                                    <option value={false}>An</option>
                                                </select><br/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" class="btn btn-warning">
                                                    <span className="fa fa-plus mr-5"></span>Luu Lai
                                                </button>&nbsp;
                                                <button 
                                                    type="submit" 
                                                    class="btn btn-danger"
                                                    
                                                >
                                                    <span className="fa fa-close mr-5"></span>Huy Bo
                                                </button>&nbsp;
                    
                                            </div>
                                        
                                        </form>
                                   </div>
                            </div>
                        </div>
                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <button type="button" class="btn btn-primary mb-10" >
                                <span className="fa fa-plus"></span>Thêm sản phẩm
                            </button>
                             

                            <div class="row mt-15">
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                      <div class="input-group">
                                          <input 
                                              type="text"
                                              name="keyword"
                                              class="form-control"
                                              placeholder="Nhap tu khoa"  
                                          />
                                          <span class="input-group-btn">
                                              <button 
                                                type="button" 
                                                class="btn btn-primary"
                                              >
                                                  <span class="fa fa-search mr-5"></span>Tìm 
                                              </button>
                                          </span>&nbsp;

                                      </div>
                                    </div>


                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div class="dropdown">
                                            <button 
                                                type="button" 
                                                class="btn btn-primary dropdown-toggle"
                                                id="dropdownMenu1"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded='true'
                                            >  Sắp Xếp 
                                            <span class="fa fa-caret-square-o-down ml-5"></span>
                                            </button>&nbsp;
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                <li  >
                                                    <a role="button" >
                                                        <span class="fa fa-sort-alpha-asc pr-5">
                                                            Tên A-Z
                                                        </span>
                                                    </a>
                                                </li>

                                                <li >
                                                    <a 
                                                        role="button" 
                                                    >
                                                        <span class="fa fa-sort-alpha-desc pr-5">
                                                            Tên Z-A
                                                        </span>
                                                    </a>
                                                </li>

                                                <li role="separator" class="divider"></li>
                                                <li>
                                                    <a role="button" >
                                                        Trạng Thái Kích Hoạt
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="button" >
                                                        Trạng Thái Ẩn
                                                    </a>
                                                </li>
                                            </ul>   
                                        </div>
                                    </div> 
                            </div>
                            
                              
                            <div class="row mt-15">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                        <table class="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">STT</th>
                                                    <th class="text-center">Tên</th>
                                                    <th class="text-center">Trạng Thái</th>
                                                    <th class="text-center">Hành Động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>
                                                        <input 
                                                            type="text"
                                                            class="form-control"
                                                            name="filterName"
                                                            
                                                        />
                                                    </td>  
                                                    <td>
                                                        <select 
                                                            name="filterStatus" 
                                                            class="form-control"
                                                           
                                                        >
                                                            <option value={-1}>Tất cả</option>
                                                            <option value={0}>Ẩn</option>
                                                            <option value={1}>Kích Hoạt</option>
                                                        </select>

                                                    </td>   
                                                    <td></td>  
                                                </tr>
                                                </tbody>
                                        </table>

                                    </div>
                            </div>
                        </div>
                </div>
          </div>
        );
    }
}

export default App;
