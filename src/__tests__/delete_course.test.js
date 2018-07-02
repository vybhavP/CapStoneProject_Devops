import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import delete_course from '../components/delete_course';

configure({ adapter: new Adapter() });

// const props = {header: "Header test"}
describe('<user_login />', () =>{
    it('header', ()=>{
        const deleteCourseComponent = shallow(<delete_course />)
        expect(deleteCourseComponent).toHaveLength(1);
    });
});