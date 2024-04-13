

interface IContactDetail {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    image: string;
    website: string;
    socialLinks: {
        facebook: { url: string };
        github: { url: string };
        twitter: { url: string };
        linkedin: { url: string };
        instagram: { url: string };
        youtube: { url: string };
        tiktok: { url: string };
        whatsapp: { url: string };
    };
}

const contactDetail:IContactDetail = {
    name: 'Abdul Wahab',
    title: 'Content Manager',
    email: 'FjF0k@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown USA',
    image: 'https://fakeimg.pl/600x400',
    website: 'https://example.com',
    socialLinks: {
        facebook: { url: 'https://www.facebook.com/example' },
        github: { url: 'https://github.com/example' },
        twitter: { url: 'https://twitter.com/example' },
        linkedin: { url: 'https://www.linkedin.com/in/example' },
        instagram: { url: 'https://www.instagram.com/example' },
        youtube: { url: 'https://www.youtube.com/channel/UCXb5w9b4nQ5UoXKJm9dZBnA' },
        tiktok: { url: 'https://www.tiktok.com/@example' },
        whatsapp: { url: 'https://wa.me/1234567890' },    
    },

}

const VCard = (contact: IContactDetail) => {
    
    const {facebook , github , twitter , linkedin , instagram , youtube , tiktok , whatsapp } = contact.socialLinks;

    return(
        <div className="flex  container w-[800px] pb-14  mx-auto  text-[#459DBB] bg-slate-50 rounded-lg shadow-xl  ">
        <div className="flex w-5/12 items-center justify-center ">
            <img
                className="size-52 rounded-full object-cover border-[#459DBB] border-8"
                src={contact.image}
                alt=""
            />
        </div>
        <div className="my-5 flex w-7/12 flex-col space-y-3  mt-12">
            <div id="parta" className="flex flex-col   mb-12">
                    <h1 className="font-serif text-4xl font-bold">{ contact.name }</h1>
                <h2 className="text-2xl text-neutral-600 font-bold  ml-8">
                    { contact.title }
                </h2>
            </div>
            <div id="partb" className="flex flex-col  space-y-3">
                <div className="ml-4 flex space-x-4">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                        <span>{contact.phone }</span>
                </div>
                <div className="ml-4 flex space-x-4">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </span>
                        <span>{ facebook.url }</span>
                </div>
                <div className="ml-4 flex space-x-4">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                        </svg>
                    </span>
                        <span>{ contact.website }</span>
                </div>
                <div className="ml-4 flex space-x-4">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <span className="w-3/4">
                        {contactDetail.address}
                    </span>
                </div>
            </div>
        </div>
    </div>

    )
}

const VisitingCard = () => {
	return (
        <div className="m-20">
            <VCard {...contactDetail}  />
        </div>
    );
};

export default VisitingCard;
