import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SegmentComponent from './SegmentComponent';

configure({ adapter: new Adapter() });

const props = {header: "Header test"}
describe('Segment header', () =>{
    let segment_component = mount(<SegmentComponent header={props.header} />)
    // console.log(segment_component.debug());
    it('header', ()=>{
        expect(segment_component.find('Header').text()).toEqual(props.header);
    });
});