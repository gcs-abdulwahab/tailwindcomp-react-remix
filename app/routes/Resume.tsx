//  bg-cyan-800
// slate-700
// neutral-200

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { resume_data } from "~/data/data";

//  write a loader function

type JobExperienceType = {
	title: string;
	company: string;
	duration: string;
};

const JobExperience = (job: JobExperienceType) => {
	return (
		<div className="job">
			<h3 id="duration" className="prose">
				{job.duration}
			</h3>
			<h3 id="company" className="prose">
				{job.company}
			</h3>
			<span id="title ">{job.title}</span>
		</div>
	);
};

export async function loader() {
	// return resume data after 3 seconds and return the promise
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(json(resume_data));
		}, 3000);
	})

}

const Resume = () => {
	const ResumeData = useLoaderData<typeof loader>();
	//  destructure ResumeData

	console.log(ResumeData);
	// get the Job Experiences from the resumeData
	const JobExperiences = ResumeData.jobExperiences;
	const skills = ResumeData.skills;
	const languages = ResumeData.languages;

	return (
		<div className=" bg-slate-700 pt-5 ">
			<div className="mx-auto w-[800px] rounded-3xl bg-white ">
				<div className="flex w-full flex-row items-center bg-neutral-200 rounded-t-3xl">
					<div className="flex w-1/2 items-center flex-wrap p-5   space-y-2  pb-12">
						<img
							className="inline-block size-10 rounded-full"
							src="https://fakeimg.pl/400x400"
							alt=""
						/>
						<h1 className="inline-block px-2 text-4xl grow font-bold">
							About Me
						</h1>
						<p className="prose text-justify">{ResumeData.AboutMe}</p>
					</div>

					<div className="flex w-1/2 flex-col items-center gap-2">
						<h1 className="text-5xl font-extrabold uppercase">Abdul Wahab</h1>
						<h2 className="prose self-stretch text-center text-2xl tracking-widest">
							{ResumeData.title}
						</h2>
					</div>
				</div>

				<div className="flex flex-row items-center">
					<div id="leftmain" className="mt-8 flex w-8/12 flex-col ">
						<div id="jobsexperience">
							<div className="space-y-8 p-4 pt-0">
								<img
									className="inline-block size-10 rounded-full"
									src="https://fakeimg.pl/400x400"
									alt=""
								/>
								<h1 className="inline-block pl-2 text-2xl font-bold uppercase tracking-widest">
									Jobs Experiences
								</h1>

								{JobExperiences.map((job, index) => (
									<JobExperience key={index} {...job} />
								))}
							</div>
						</div>

						<div id="skills">
							<div className="space-y-4 p-4 pt-0">
								<img
									className="inline-block size-8 rounded-full"
									src="https://fakeimg.pl/400x400"
									alt=""
								/>
								<h1 className="inline-block text-2xl font-bold uppercase tracking-widest">
									Skills
								</h1>

								<ul className="prose list-inside list-disc">
									{skills.map((skill, index) => (
										<li key={index}>{skill}</li>
									))}
								</ul>
							</div>
						</div>

						<div id="languages">
							<div className="space-y-4 p-4 pt-0">
								<img
									className="inline-block size-8 rounded-full"
									src="https://fakeimg.pl/400x400"
									alt=""
								/>
								<h1 className="inline-block text-2xl font-bold uppercase tracking-widest">
									Languages
								</h1>

								<ul className="prose flex list-inside list-disc flex-wrap">
									{languages.map((language, index) => (
										<li className="w-1/2" key={index}>
											{language}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div
						id="rightmain"
						className="relative mr-1 mt-20 flex w-1/2 flex-col items-center gap-2 bg-slate-700 px-2 pt-44 h-dvh text-white"
					>
						<div
							id="profilepic"
							className="absolute top-0 flex w-full justify-center"
						>
							<img
								className="absolute top-4 inline-block size-72 -translate-y-1/2 transform rounded-full object-cover object-left-top ring-[13px] ring-white grayscale"
								src={ResumeData.image}
								alt=""
							/>
						</div>

						<div
							id="contactme"
							className="w-[350px] border-indigo-600 px-2 py-2"
						>
							<img
								className="inline-block size-12 rounded-full"
								src="https://fakeimg.pl/150x150"
								alt=""
							/>
							<h1 className="inline-block text-2xl font-bold uppercase tracking-widest">
								Contact me
							</h1>

							<ul id="contactdetails" className="pl-12">
								<li>+123-456-7890</li>
								<li>hello@reallygreatsite.com</li>
								<li>123 Anywhere St., Any City</li>
							</ul>
						</div>

						<div
							id="education"
							className="w-[350px] border-indigo-600 px-2 py-2"
						>
							<img
								className="inline-block size-12 rounded-full"
								src="https://fakeimg.pl/150x150"
								alt=""
							/>
							<h1 className="inline-block text-2xl font-bold uppercase tracking-widest">
								education
							</h1>

							<ul id="contactdetails" className="pl-12">
								<li>+123-456-7890</li>
								<li>hello@reallygreatsite.com</li>
								<li>123 Anywhere St., Any City</li>
							</ul>
						</div>

						<div
							id="references"
							className="w-[350px] border-indigo-600 px-2 py-2"
						>
							<img
								className="inline-block size-12 rounded-full"
								src="https://fakeimg.pl/150x150"
								alt=""
							/>
							<h1 className="inline-block text-2xl font-bold uppercase tracking-widest">
								References
							</h1>

							<ul id="contactdetails" className="pl-12">
								<li>Estelle Darcy</li>
								<li>Wardiere Inc. / CEO</li>
								<li>
									<span>Phone</span> <span>+123-456-7890</span>
								</li>
								<li>
									<span>email</span> <span>hello@reallygreatsite.com</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
