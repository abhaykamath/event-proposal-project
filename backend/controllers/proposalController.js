const proposalModel = require("../models/proposal");

const getAllProposals = async (req, res) => {
    try {
        const data = await proposalModel.find();
        res.json({
            data
        })
    } catch (err) {
        res.json({ message: err.message });
    }
}

const getVendorProposals = async (req, res) => {
    try {
        const data = await proposalModel.find({ vendor: req.user._id });
        res.json({
            data
        })
    } catch (err) {
        res.json({ message: err.message });
    }
}

const createNewProposal = async (req, res) => {
    try {
        const data = await proposalModel.create({ vendor: req.user._id, ...req.body });
        res.json({
            status: "success",
            data
        })
    } catch (e) {
        res.json({
            status: "failed",
            message: e.message
        })
    }
}

const editProposal = async (req, res) => {
    try {
        const proposal = await proposalModel.findById(req.params.id);
        if (req.user._id.equals(proposal.vendor)) {
        const data = await proposalModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            status: "success",
            data
        })
    } else {
        res.status(403).json({
            message: "forbidden"
        })
    }
    } catch (e) {
        res.json({
            status: "failed",
            message: e.message
        })
    }
}

const deleteProposal = async (req, res) => {
    try {
        const proposal = await proposalModel.findById(req.params.id);
        if (req.user._id.equals(proposal.vendor)) {
            const data = await proposalModel.findByIdAndDelete(req.params.id);
            res.json({
                status: "success",
                message: "Deleted Proposal"
            })
        } else {
            res.status(403).json({
                message: "forbidden"
            })
        }
    } catch (e) {
        res.json({
            status: "failed",
            message: e.message
        })
    }
}

module.exports = { getAllProposals, getVendorProposals, createNewProposal, editProposal, deleteProposal };