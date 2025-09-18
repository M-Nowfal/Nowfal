import viewCountModel from "../models/viewCountModel.js";

export const getViewsCount = async (_req, res, next) => {
  try {
    const views = await viewCountModel.find();
    res.status(200).json(views);
  } catch (err) {
    next(err);
  }
};

export const increaseViewCount = async (_req, res, next) => {
  try {
    await viewCountModel.create({});
    res.status(200);
  } catch (err) {
    next(err);
  }
};
