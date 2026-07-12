import { H6, P, UL, LI, Btn } from '../../../../AbstractElements';
import React, { Fragment } from 'react';

const JobDescription = () => {
    return (
        <Fragment>
            <div className="job-description">
                <H6>Job Description</H6>
                <P attrPara={{ className: 'text-start' }} >Viho is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.</P>
            </div>
            <div className="job-description">
                <H6>Qualifications </H6>
                <UL>
                    <LI>Have shipped multiple iOS, Android, and/or web products </LI>
                    <LI>5+ years UI/UX experience</LI>
                    <LI>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</LI>
                    <LI>Ability to autonomously pursue elegant solutions to open-ended problems</LI>
                    <LI>Comfort with ambiguity</LI>
                    <LI>ively work on more than one project at a time</LI>
                    <LI>Experience conducting user research and stakeholder interviews</LI>
                    <LI>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</LI>
                    <LI>Bonus Considerations </LI>
                </UL>
            </div>
            <div className="job-description">
                <H6>Agency experience</H6>
                <UL>
                    <LI>Experience working with Agile development teams</LI>
                    <LI>Experience with RITE method usability testing</LI>
                    <LI>Experience in visual and motion design; ability to translate UX design into high quality visuals</LI>
                    <LI>Mastery of Sketch & InVision</LI>
                    <LI>Knowledge of mobile or front-end web programming</LI>
                </UL>
            </div>
            <div className="job-description">
                <H6>Perks</H6>
                <UL>
                    <LI>Competitive pay</LI>
                    <LI>Competitive medical, dental, and vision insurance plans</LI>
                    <LI>-proviCompanyded 401(k) plan</LI>
                    <LI>Paid vacation and sick time</LI>
                    <LI>Free snacks and beverages</LI>
                </UL>
            </div>
            <div className="job-description">
                <Btn attrBtn={{ className: 'btn me-1', color: 'primary', type: 'button' }}><span><i className="fa fa-check" ></i></span> Save this job</Btn>
                <Btn attrBtn={{ className: 'btn', color: 'primary', type: 'button' }} ><span><i className="fa fa-share-alt"></i></span> Share</Btn>
            </div>
        </Fragment>
    );
};

export default JobDescription;