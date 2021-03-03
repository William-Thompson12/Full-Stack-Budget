import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
// CSS
import '../views/mainhub.css';
// Components
import Header from '../components/header-components/header';
import Footer from '../components/footer-components/footer';
import ActionContainer from '../components/budget-components/actionContainer';
import UserData from '../services/users.services';
import BudgetData from '../services/budgets.services';
// Actions
import { findBudgets, findUser, setBudget } from '../redux/actions';
// Bootstrap
import Tab from 'react-bootstrap/Tab';

const MainHub = (props) => {
    const [budgetData, setBudgetData] = useState([{name:'', budgetId: '', expense:[], income:[], description: ''}])
    const [key, setKey] = useState('');

    function findBudgetData() {
        BudgetData.getAll(Cookies.get('userToken'))
        .then((response) => {
            props.findBudgets(response.data);
            setBudgetData(response.data);
            setKey(budgetData[0].budgetId);
        })
    }
    
    function findUserData() {
        UserData.get(Cookies.get('userToken'))
        .then((response) => {
            props.findUser(response.data[0]);
        })
    }

    useEffect(() => {
        findUserData();
        findBudgetData();
        console.log('rerendering');
    }, []);

    return (
        <>
        {console.log(budgetData)}
            <div className="page">
                <Header profile={true}/>
                <div className="main">
                    <Tab.Container id="action-Container" defaultActiveKey={key}>
                        <ActionContainer budgets={budgetData} />
                    </Tab.Container>
                </div>
                <Footer/>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
        findUser: (userD) => { dispatch(findUser(userD)) },
        findBudgets: (userD) => { dispatch(findBudgets(userD))},
        setBudget: (data) => { dispatch(setBudget(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHub);