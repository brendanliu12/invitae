import React from 'react';
import axios from 'axios';

it('renders without crashing', () => {
    axios.get('http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/variant?gene=ENG')
        .then(res => {
            const data = res.data.replace(/NaN/g, '"NaN"');
            const a = JSON.parse(data);
            console.log(a.length);
            expect(a.length).toBe(100);
        });
});
