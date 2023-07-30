
import categoryModel from "../models/categoryModel.js"
import slugify from "slugify";


export const createCategoryController = async(req,res)=>{
    try {
        const {name} = req.body;

        if(!name){
            return res.send({message:"name is not defined"});
        }

        const existingCategory=await categoryModel.findOne({name});
        if(existingCategory){
            return res.send({
                success:false,
                message:"category already defined"
            })
        }

        const newCategory= await new categoryModel({name,slug:slugify(name)}).save();
        return res.send({
            success:true,
            message:"category created succesfully",
            newCategory
        })


    } catch (error) {
        return res.send({
            success:false,
            message:"error in creating the category",
            error
        })
    }
}


export const updateCategoryController=async (req,res)=>{
    try {
        const {name} = req.body;
        const {id} = req.params;
        const category= await categoryModel.findByIdAndUpdate(id,{name , slug:slugify(name)},{new:true});
        return res.send({
            success:true,
            message:"category Updated succesfully",
            category
        })
    } catch (error) {
        return res.send({
            success:false,
            message:"error in updating the category",
            error
        })
    }
}

export const categoryController=async (req,res)=>{
    try {
        const category = await categoryModel.find({});
        return res.send({
            success:true,
            message:"all categories fetched succesfully",
            category
        })
    } catch (error) {
        return res.send({
            success:false,
            message:"error in fetching all the category",
            error
        })
    }
}

export const singleCategoryController=async (req,res)=>{
    try {
        const category = await categoryModel.findOne({slug:req.params.slug});
        return res.send({
            success:true,
            message:"single categories fetched succesfully",
            category
        })

    } catch (error) {
        return res.send({
            success:false,
            message:"error in fetching the single category",
            error
        })
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting category",
        error,
      });
    }
  };