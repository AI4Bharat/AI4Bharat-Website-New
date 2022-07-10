---
title: IndicBERT
excerpt: ''
date: '2022-06-15T10:47:00.000Z'
---

IndicBERT is a multilingual ALBERT model trained on large-scale corpora, covering 12 major Indian languages: Assamese, Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, Telugu. IndicBERT has much less parameters than other public models like mBERT and XLM-R while it still manages to give state of the art performance on several tasks.

### Download Model

The model can be downloaded [here](https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/models/indic-bert-v1.tar.gz). Both tf checkpoints and pytorch binaries are included in the archive. Alternatively, you can also download it from [Huggingface](https://huggingface.co/ai4bharat/indic-bert).

### Usage

The easiest way to use Indic BERT is through the Huggingface transformers library. It can be simply loaded like this:

```
from transformers import AutoModel, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained('ai4bharat/indic-bert')
model = AutoModel.from_pretrained('ai4bharat/indic-bert')

```

### Tutorials

If you want to quickly try experimenting with IndicBERT, we suggest checking out our tutorials and other fine-tuning notebooks that run on Google Colab:

*   General Finetuning 

### Pretraining Details

IndicBERT is pre-trained with IndicNLP corpus which covers 12 Indian languages (including English) The amount of pretraining data for each language is listed below:

### Evaluation

We evaluate IndicBERT model on a set of tasks as described in the [IndicGLUE page](https://indicnlp.ai4bharat.org/indic-glue). Here are the results that we obtain:

#### IndicGLUE

***

#### Additional Tasks

\* Note: all models have been restricted to a max\_seq\_length of 128.

### Citing

If you are using any of the resources, please cite the following [paper](https://aclanthology.org/2020.findings-emnlp.445):

```
@inproceedings{kakwani2020indicnlpsuite,
    title={{IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for Indian Languages}},
    author={Divyanshu Kakwani and Anoop Kunchukuttan and Satish Golla and Gokul N.C. and Avik Bhattacharyya and Mitesh M. Khapra and Pratyush Kumar},
    year={2020},
    booktitle={Findings of EMNLP},
}

```

### License

The IndicBERT [code](https://github.com/AI4Bharat/indic-bert) (and [model](https://huggingface.co/ai4bharat/indic-bert)) are released under the MIT License.