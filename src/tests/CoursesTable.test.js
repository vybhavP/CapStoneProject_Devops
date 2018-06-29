import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CoursesTable from '../components/CoursesTable';

configure({ adapter: new Adapter() });

// const props = {header: "Header test"}
describe('<user_login />', () =>{
    it('header', ()=>{
        const coursesTableComponent = shallow(<CoursesTable />)
        console.log(coursesTableComponent.debug())
        expect(coursesTableComponent).toHaveLength(1);
    });
});