import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import user_login from '../components/user_login';

configure({ adapter: new Adapter() });

const props = {header: "Header test"}
describe('Segment header', () =>{
    let segment_component = mount(<user_login />);
    console.log(segment_component.debug());
    // it('header', ()=>{
    //     expect(segment_component.find('Form')).toEqual(true);
    // });
    it('should render without throwing an error', () => {
        expect(segment_component.is('.container')).toBe(true);
    });
});