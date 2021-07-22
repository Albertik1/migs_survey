import React, { Component } from 'react';
import '../App.css';
import { l10nMain, replaceMMNumbers } from '../localization';
import BarchartQuestion from './BarchartQuestion/BarchartQuestion';
import FreeTextQuestion from './FreeTextQuestion/FreeTextQuestion';
import OptionsQuestion from './OptionsQuestion/OptionsQuestion';

class AllQuestions extends React.Component {
	render() {

    const {calcQuestionWidthFunc,questionWidthScaleFactor,width,l10n,submitAnswer} = this.props;
    const calcQuestionWidth = () => calcQuestionWidthFunc(questionWidthScaleFactor,width)

		return <div>
      <FreeTextQuestion
				questionNumber={"1"}
				questionText="Full name"
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>
			<OptionsQuestion
		questionNumber={2}
		questionText="How old are you?"
		options={[
				"17 or younger",
			"18-23",
			"24-29",
			"30-39",
			"40-49",
			"50 or older"
	]}
		allowOther={false}
		questionWidth={calcQuestionWidth()}
		l10n={l10n}
		submit={submitAnswer}
		/>
			<FreeTextQuestion
				questionNumber={3}
				questionText="Where are you from?"
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>


			<OptionsQuestion
				questionNumber={4}
				questionText="What is your Sex?"
				options={[
					"Male",
					"Female",
					"Prefer not to answer"
				]}
				allowOther={false}
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>

			<OptionsQuestion
				questionNumber={5}
				questionText="What is your Marital Status?"
				options={[
					"Married or living together",
					"Divorced/separated",
					"Widowed",
					"Never married and never lived together",
					"In relationship",
					"Prefer not to answer"
				]}
				allowOther={false}
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>
			<OptionsQuestion
		questionNumber={6}
		questionText="What was your activity status during the last 12 months?"
		options={[
				"1 - employee (government)",
			"2 - employee (private, org)",
			"3 - employer",
			"4 - own account worker",
			"5 - contributing family worker",
			"6 - sought work",
			"7 - did not seek work",
			"8 - full-time student",
			"9 - household work",
			"10 - pensioner, retired, elderly person",
			"11 - ill, disabled",
			"12 - other",
			"Did not answer"
	]}
		allowOther={true}
		questionWidth={calcQuestionWidth()}
		l10n={l10n}
		submit={submitAnswer}
		/>

			<FreeTextQuestion
				questionNumber={7}
				questionText="What is your ethnicity?"
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>

			<OptionsQuestion
				questionNumber={8}
				questionText="What is your religion?"
				options={[
					"Buddhist",
					"Christian",
					"Muslim",
					"Hindu",
					"Animist",
					"Other religion",
					"No religion",
					"Did not answer"
				]}
				allowOther={true}
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>

			<BarchartQuestion
		questionNumber={9}
		questionText="Allocate percentage of your days a week you eat food from each of the following sources"
		options={[
				{id:1,optionText:"Delivered food",points:20,type:"percent"},
		{id:2,optionText:"Eat out",points:40,type:"percent"},
		{id:3,optionText:"Food cooked by my family",points:30,type:"percent"},
			{id:4,optionText:"Food cooked by me or my roommates",points:10,type:"percent"},
		]}
		questionWidth={calcQuestionWidth()}
		l10n={l10n}
		submit={submitAnswer}
		/>

			<OptionsQuestion
				questionNumber={10}
				questionText="When eating out, what's the average amount you spend on each meal (lunch or dinner excluding drink)?"
				options={[
					"Less than 100NTD",
					"100-200NTD",
					"200-300NTD",
					"300-400NTD",
					"400-500NTD",
					"More than 500NTD"
				]}
				allowOther={false}
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>

			<OptionsQuestion
				questionNumber={11}
				questionText="When not eating homemade food, why would you prefer to eat out or have the food delivered to you (assuming the same price and quality in both cases)?"
				options={[
					"I prefer food delivery because of its convenience.",
					"I prefer food delivery to save time.",
					"I prefer to go out to get away from study/work environment during lunch/dinner.",
					"I prefer to go out because I trust foods at restaurants more than delivered food.",
					"Prefer not to answer"
				]}
				allowOther={false}
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>

			<BarchartQuestion
		questionNumber={12}
		questionText="Allocate the percentage when not eating homemade food, how important are the following factors when deciding your food provider for eating out or ordering to be delivered?"
		options={[
				{id:1,optionText:"Quick Access",points:20,type:"percent"},
		{id:2,optionText:"Taste",points:40,type:"percent"},
		{id:3,optionText:"Quality/Health",points:30,type:"percent"},
		{id:4,optionText:"Price",points:10,type:"percent"},

	]}
		questionWidth={calcQuestionWidth()}
		l10n={l10n}
		submit={submitAnswer}
		/>

		<OptionsQuestion
				questionNumber={13}
				questionText=" Imagine you are on-campus or at your housing and want to have food for lunch/dinner. You have two options=> Option1: Go to the cafe/restaurant to order and eat it there. => Option2: Order online (1-minute process) and use free delivery to your housing or an on-campus location close to you at a certain time. How often would you use each of these options?"
				options={[
					"100% Option1, 0% Option2",
					"75% Option1, 25% Option2",
					"50% Option1, 50% Option2",
					"25% Option1, 75% Option2",
					"0% Option1, 100% Option2"
				]}
				allowOther={false}
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>

		<BarchartQuestion
				questionNumber={14}
				questionText="Allocate the percentage how much do you like each of these food categories?s"
				options={[
					{id:1,optionText:"Vegetarian food",points:8,type:"percent"},
					{id:2,optionText:"local food",points:20,type:"percent"},
					{id:3,optionText:"Sandwiches",points:10,type:"percent"},
					{id:4,optionText:"Mexican food",points:5,type:"percent"},
					{id:5,optionText:"American food",points:20,type:"percent"}
				]}
				questionWidth={calcQuestionWidth()}
				l10n={l10n}
				submit={submitAnswer}
			/>

			<FreeTextQuestion
		questionNumber={15}
		questionText="If interested to get a discount coupon for your time spent, you can add your email address below, otherwise click Submit:"
		questionWidth={calcQuestionWidth()}
		l10n={l10n}
		submit={submitAnswer}
		/>


		</div>

	}
}

export default AllQuestions