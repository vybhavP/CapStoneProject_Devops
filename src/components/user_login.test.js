import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import user_login from './user_login';

configure({ adapter: new Adapter() });

const props = {header: "Header test"}
describe('<user_login />', () =>{
    it('header', ()=>{
        const loginComponent = shallow(<user_login />)
        console.log(loginComponent.debug())
        expect(loginComponent).toHaveLength(1);
    });
});