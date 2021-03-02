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

const MainHub = (props) => {
    const [loading, setLoading] = useState(true)
    const [budgetData, setBudgetData] = useState([])

    function findBudgetData() {
        BudgetData.getAll(Cookies.get('userToken'))
        .then((response) => {
            props.findBudgets(response.data);
            props.setBudget(response.data[0].budgetId);
            console.log(response.data)
            setTimeout(() => {
                setBudgetData([...response.data]);
              }, 3000);
        });
    }
    
    function findUserData() {
        UserData.get(Cookies.get('userToken'))
        .then((response) => {
            props.findUser(response.data[0]);
            setLoading(false)
        })
    }

    useEffect(() => {
        findUserData()
        findBudgetData()
    }, [loading]);

    return (
        <>
        {console.log(budgetData)}
            <div className="page">
                <Header profile={true}/>
                <div className="main">
                    <ActionContainer budgets={budgetData} />
                </div>
            </div>
            <Footer/>
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