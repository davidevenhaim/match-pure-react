import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import OnboardingPage from '../../Layout/icons/SignUp/onboardingPage';

const onboardingPage = () => {
    useEffect(() => {
        document.title = 'Welcome to Match&Roll';
    })

    return (
        <React.Fragment>
            <img src={OnboardingPage.OnboardingPage} alt="onboarding" />
            <Link to={"/signup1"}>
            <img src={OnboardingPage.GetStartedButton} alt="getstarted" />
            </Link>
        </React.Fragment>
    )
}

export default onboardingPage;