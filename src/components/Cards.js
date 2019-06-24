import React from 'react';
import { Card, Icon,Col} from 'antd';

import './App.css';
import CollectionCreateForm from './CollectionCreateForm';



class Cards extends React.Component

{
   
        state={theme:'',visible: false,name:this.props.data.name, id:this.props.data.id,email:this.props.data.email,phone:this.props.data.phone,website:this.props.data.website};
        imgsrc =(`https://avatars.dicebear.com/v2/avataaars/${this.props.data.username}.svg?options[mood][]=happy`);
    
    
    changeIcon=()=>
    {
        this.state.theme==='' ? this.setState({theme:"filled"}) : this.setState({theme:''});
    }

    showModal = () => {
        this.setState({ visible: true });
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };

    

     
    
      handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
        
    
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false ,name:values.name , website:values.website ,phone:values.phone, email:values.email});
          
        });
      };
    
      saveFormRef = formRef => {
        this.formRef = formRef;
      };

render()
{

    
  return (


    <div>
        <Col xs={24} sm={24} md={12} lg={8} xl={6} >

         <Card className="ant-card ant-card-bordered" 
            style={{margin:"15px" }}
            cover={
                <img src={this.imgsrc} width="200px" height="200px" alt=""  />
             }
    actions={[<button><Icon type="heart" theme={this.state.theme} style={{fontSize:"20px", color:"#ff0000"}} onClick={this.changeIcon} /></button>, <button><Icon type="edit"  style={{fontSize:"20px"}} onClick={this.showModal}/></button>, <button><Icon type="delete" theme="filled" style={{fontSize:"20px"}} onClick={()=>this.props.removeItem(this.state.name)}/></button> ]}
  >
    <h2>{this.state.name}</h2>
            
              <p className="setFont"><Icon type="mail" style={{fontSize:"18px", marginRight:"10px"}}/>{this.state.email} </p>
              <p className="setFont"><Icon type="phone" style={{fontSize:"18px", marginRight:"10px"}}/>   {this.state.phone}</p>  
              <p className="setFont"><Icon type="global" style={{fontSize:"18px" , marginRight:"10px"}}/>https:// {this.state.website}</p>
  </Card>



  </Col>

  <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          website={this.state.website}
          
        />

  
  </div>
 
  );
}
}
export default Cards;