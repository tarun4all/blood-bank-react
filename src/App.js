import React, { Component } from 'react';
import logo from './logo.svg';
import { Button , Card, Row, Col, Input } from 'antd';
import './App.css';
import './ant.css';
const { Meta } = Card;

class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      arr: {
        aplus:15,
        bplus:15,
        oplus:15,
        abplus:15,
        aminus:15,
        bminus:15,
        ominus:15,
        abminus:15
      },
      arrcolor: {
        aplus:'white',
        bplus:'white',
        oplus:'white',
        abplus:'white',
        aminus:'white',
        bminus:'white',
        ominus:'white',
        abminus:'white'
      },
    }
  }
  calculations=()=>{
    if(document.getElementById('blood').value && document.getElementById('bottle').value){
      var blood=document.getElementById('blood').value;
      var bottle=document.getElementById('bottle').value;
      console.log(blood);
      if( blood === 'A+'){
        console.log(bottle);
        if( bottle <= this.state.arr.aplus){
          this.state.arrcolor.aplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.oplus){
          console.log('O');
          this.state.arrcolor.oplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.aminus){
          console.log('A-');
          this.state.arrcolor.aminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.ominus){
          console.log('O-');
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      } else if( blood === 'B+'){
        if( bottle <= this.state.arr.bplus){
          this.state.arrcolor.bplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.oplus){
          this.state.arrcolor.oplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.bminus){
          this.state.arrcolor.bminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.ominus){
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      } else if( blood === 'A-'){
        if( bottle <= this.state.arr.aminus){
          this.state.arrcolor.aminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.ominus){
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      } else if( blood === 'B-'){
        if( bottle <= this.state.arr.bminus){
          this.state.arrcolor.bminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.ominus){
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      } else if( blood === 'O+'){
        if( bottle <= this.state.arr.oplus){
          this.state.arrcolor.oplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.ominus){
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      } else if( blood === 'O-'){
        if( bottle <= this.state.arr.ominus){
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      } else if( blood === 'AB-'){
        if( bottle <= this.state.arr.abminus){
          this.state.arrcolor.abminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.aminus){
          this.state.arrcolor.aminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.bminus){
          this.state.arrcolor.bminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.ominus){
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      } else if( blood === 'AB+'){
        if( bottle <= this.state.arr.aplus){
          this.state.arrcolor.aplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.abplus){
          this.state.arrcolor.abplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.bplus){
          this.state.arrcolor.bplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.oplus){
          this.state.arrcolor.oplus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.aminus){
          this.state.arrcolor.aminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.abminus){
          this.state.arrcolor.abminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.bminus){
          this.state.arrcolor.bminus = 'green';
          this.forceUpdate();
        }
        if( bottle <= this.state.arr.ominus){
          this.state.arrcolor.ominus = 'green';
          this.forceUpdate();
        }
      }
    }
    else{
      alert('please select blood group');
    }
  }

  render() {
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="Blood Bank" bordered={true} style={{ width: 1300, height:500 }}>
        
        <Row gutter={16}>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.aplus }}>
                <Meta
                  title="A+"
                  description={this.state.arr.aplus}
                />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.bplus }}>
                <Meta
                  title="B+"
                  description={this.state.arr.bplus}
                />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.oplus }}>
                <Meta
                  title="O+"
                  description={this.state.arr.oplus}
                />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.abplus }}>
                <Meta
                  title="AB+"
                  description={this.state.arr.abplus}
                />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.aminus }}>
                <Meta
                  title="A-"
                  description={this.state.arr.aminus}
                />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.bminus }}>
                <Meta
                  title="B-"
                  description={this.state.arr.bminus}
                />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.ominus }}>
                <Meta
                  title="O-"
                  description={this.state.arr.ominus}
                />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="gutter-box">
                <Card style={{ width: 100, marginTop: 16, backgroundColor:this.state.arrcolor.abminus }}>
                <Meta
                  title="AB-"
                  description={this.state.arr.abminus}
                />
                </Card>
              </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box" style={{padding: '50px' }}>
              <Card title="Requirement Form" bordered={false} style={{ width: 300 }}>
              <p>Blood Required <Input placeholder="ex - a+" id='blood' onChange={this.calculations.bind()} /></p>
              <p>No of Bottles  <Input placeholder="ex - 10" id='bottle' onChange={this.calculations.bind()} /></p>
               </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box" style={{padding: '50px' }}>
              <Card title="Bucket" bordered={true} style={{ width: 300, height:200 }}>
               </Card>
              </div>
            </Col>
        
        </Row>
        </Card>
        </div>
      </div>
    );
  }
}

export default App;
