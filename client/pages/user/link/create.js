// imports
import { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import axios from 'axios';
import { API } from '../../../config';
import { showSuccessMessage, showErrorMessage } from '../../../helpers/alerts';
/*
handle change title
handle change url
handle change type
handle change medium
handle submit > post request to server
show categories > checkbox
show types > radio buttons
show medium > radio buttons
handle toggle > selecting categories
link create form
return > show create forms, categories checkbox, radio buttons, success/error messages etc
get token of the logged in user - required to create link
 */

const Create = () => {
    // state
    const [state, setState] = useState({
        title: '',
        url: '',
        categories: [],
        loadedCategories: [],
        success: '',
        error: '',
        type: '',
        medium: ''
    });

    const { title, url, categories, loadedCategories, success, error, type, medium } = state;

    // load categories when component mounts using useEffect
    useEffect(() => {
        loadCategories();
    }, [success]);

    const loadCategories = async () => {
        const response = await axios.get(`${API}/categories`);
        setState({ ...state, loadedCategories: response.data });
    };

    const handleTitleChange = e => {
        setState({ ...state, title: e.target.value, error: '', success: '' });
    };

    const handleURLChange = e => {
        setState({ ...state, url: e.target.value, error: '', success: '' });
    };

    const handleSubmit = async e => {
        console.log('POST to server');
    };

    const handleToggle = c => () => {
        // return the first index or -1
        const clickedCategory = categories.indexOf(c);
        const all = [...categories];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log('all >> categories', all);
        setState({ ...state, categories: all, success: '', error: '' });
    };

    // show categories > checkbox
    // this function will return a list
    const showCategories = () => {
        return (
            loadedCategories &&
            loadedCategories.map((c, i) => (
                <li className="list-unstyled" key={c._id}>
                    <input type="checkbox" onChange={handleToggle(c._id)} className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        );
    };

 // link create form
 const submitLinkForm = () => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="text">Title</label>
            <input type="text" className="form-control" onChange={handleTitleChange} value={title} />
        </div>
        <div className="form-group">
            <label className="text">URL</label>
            <input type="url" className="form-control" onChange={handleURLChange} value={url} />
        </div>
        <div>
            <button className="btn btn-outline-warning" type="submit">
                Submit
            </button>
        </div>
    </form>
);


    return (
        <Layout>
            <div className="row">
                <div className="col-md-12">
                    <h1>Submit Link/URL</h1>
                    <br />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <div className="form-group">
                        <label className="text ml-4">Category</label>
                        <ul style={{ maxHeight: '100px', overflowY: 'scroll' }}>{showCategories()}</ul>
                    </div>
                </div>
                
                <div className="col-md-8">{submitLinkForm()}</div>
            </div>
            {JSON.stringify(title)}
            {JSON.stringify(url)}
        </Layout>
    );
};

export default Create;
