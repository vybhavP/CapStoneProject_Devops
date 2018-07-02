import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import user_login from '../components/user_login';

configure({ adapter: new Adapter() });

const cookie_key = 'Users';
const props = {email: '', password: ''}

describe('<user_login />', () =>{
    const loginComponent = shallow(<user_login />)
    it('login', ()=>{
        expect(loginComponent).toHaveLength(1);
    });
    it('form exists?', ()=>{
        expect(loginComponent.exists('Form')).toBe(true);
    });
});