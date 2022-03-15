import { useForm } from 'react-hook-form'
import Button from '../../components/atoms/Button';

export default function Profile() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>();

    const personal =
        <div className='p-6'>
            <div className="flex justify-center text-xl text-txt-primary uppercase mb-10">
                <span>personal information</span>
            </div>
            <div className='flex items-center justify-center'>
                {
                    <div className="grid grid-cols-10 w-full my-5 ">
                        {/* part one */}
                        <div className="col-span-1"></div>
                        {/* part two */}
                        <div className="col-span-8">
                            <div className="grid grid-cols-2 gap-24 text-sm text-primary">
                                {/* sub-part one */}
                                <div className='w-full'>
                                    {/* Firstname */}
                                    <div className="form-group">
                                        <label htmlFor="#" className='uppercase block mb-3'>Firstname</label>

                                        <input type="text" id="names" placeholder='Nicoco' className='uppercase mb-9 w-full border-b outline-none border-secondary-400 bg-white'
                                            {...register("name", {
                                                required: "* This field is required"
                                            })}
                                        />
                                        <div className="text-red-600 text-xs my-2">
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>
                                    {/* username */}
                                    <div className="form-group">
                                        <label htmlFor="#" className='uppercase block mb-3'>username</label>

                                        <input type="text" id="names" placeholder='Names' className='uppercase mb-9 w-full border-b outline-none border-secondary-400 bg-white'
                                            {...register("name", {
                                                required: "* This field is required"
                                            })}
                                        />
                                        <div className="text-red-600 text-xs my-2">
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>
                                    {/* category */}
                                    <div className="form-group">
                                        <label htmlFor="#" className='uppercase block mb-3'>category</label>
                                        
                                        <input type="text" id="names" placeholder='' className='uppercase mb-9 w-full border-b outline-none border-secondary-400 bg-white'
                                            {...register("name", {
                                                required: "* This field is required"
                                            })}
                                        />
                                        <div className="text-red-600 text-xs my-2">
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>
                                </div>
                                {/* sub-part two */}
                                <div className='w-full'>
                                    {/* Lastname */}
                                    <div className="form-group">
                                        <label htmlFor="#" className='uppercase block mb-3'>lastname</label>

                                        <input type="text" id="names" placeholder='Names' className='uppercase mb-9 w-full border-b outline-none border-secondary-400 bg-white'
                                            {...register("name", {
                                                required: "* This field is required"
                                            })}
                                        />
                                        <div className="text-red-600 text-xs my-2">
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>
                                    {/* email */}
                                    <div className="form-group">
                                        <label htmlFor="#" className='uppercase block mb-3'>email</label>

                                        <input type="text" id="names" placeholder='Names' className='uppercase mb-9 w-full border-b outline-none border-secondary-400 bg-white'
                                            {...register("name", {
                                                required: "* This field is required"
                                            })}
                                        />
                                        <div className="text-red-600 text-xs my-2">
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>
                                    {/* password */}
                                    <div className="form-group">
                                        <label htmlFor="#" className='uppercase block mb-3'>password</label>

                                        <input type="text" id="names" placeholder='Names' className='uppercase mb-9 w-full border-b outline-none border-secondary-400 bg-white'
                                            {...register("name", {
                                                required: "* This field is required"
                                            })}
                                        />
                                        <div className="text-red-600 text-xs my-2">
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* part three */}
                        <div className="col-span-1 "></div>
                    </div>
                }
            </div>
            <div className="flex justify-center">
                <Button
                    onClick={() => { }}
                    hoverStyle="no-underline"
                    className="px-3"
                    bgColor="bg-primary"
                // styleType="outline"
                >
                    <span className={`text-main text-base font-medium uppercase`}>
                        Edit Profile
                    </span>
                </Button>
            </div>
        </div>

    return (
        <div className="block relative w-full h-auto px-32">
            <div className="bg-main px-16 py-8 h-full ">
                {personal}
            </div>
        </div>
    )
}