---
blocks:
  - body: >
      # Shrutilipi


      ***


      Shrutilipi is a labelled ASR corpus obtained by mining parallel audio and
      text pairs at the document scale from [All India
      Radio](https://newsonair.gov.in/) news bulletins for 12 Indian languages:
      Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odia, Punjabi,
      Sanskrit, Tamil, Telugu, Urdu. The corpus has over 6400 hours of data
      across all languages.


      Read more in our paper - [*Effectiveness of Mining Audio and Text Pairs
      from Public Data for Improving ASR Systems for Low-Resource
      Languages*](https://arxiv.org/abs/2208.12666)
    _template: content
  - caption: Dataset Details
    markdownTable: |-
      |  Language | Size (in Hours) |
      |:---------:|:---------------:|
      |  bengali  |       443       |
      |  gujarati |       460       |
      |   hindi   |       1620      |
      |  kannada  |       459       |
      | malayalam |       359       |
      |  marathi  |       1015      |
      |    odia   |       601       |
      |  punjabi  |        94       |
      |  sanskrit |        27       |
      |   tamil   |       794       |
      |   telugu  |       390       |
      |    urdu   |       193       |
      |   Total   |       6457      |
    color: default
    _template: table
  - body: "## Downloads\n\nThe dataset can be downloaded from the links given below -\n\nDownload transcripts - [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutilipi/shrutilipi\\_fairseq.zip)\n\nThe transcripts and audio paths are provided in [fairseq](https://github.com/facebookresearch/fairseq/blob/main/examples/wav2vec/README.md#fine-tune-a-pre-trained-model-with-ctc) format, which can be directly used for training models using the fairseq library. It consists of 3 files -&#x20;\n\n`train.tsv`\_file - Each line in the file contains the relative path to an audio file and the number of frames in the audio separated by tabs. The file also contains a header which has the absolute path to the dataset.\n\n`train.wrd`\_(word) file - each line contains the transcription for the audio file in the '.tsv' file which is corresponding to the same line number (ignoring the header in the '.tsv' file).\n\n`train.ltr`\_(letter) file - Tokenized transcriptions for the corresponding sentences in 'wrd' file. (tokenized to characters)\n\n**Audio Dataset Format**\n\n*   The audio files for each news bulletin are present in separate folders.\n*   The audio files are stored in\_`wav`\_format sampled at 16KHz.\n*   The audio filenames are numbered by sentence ids in the bulletin, eg.\_`sent_1.wav`\n\n**Folder Structure**\n\n```\ndata\n├── bengali\n│   ├── <bulletin-1>\n│   │   ├── sent_1.wav\n│   │   ├── sent_2.wav\n│   │   ├── ...\n│   │   └── sent_n.txt\n│   ├── <bulletin-2>\n│   └── ...\n├── gujarati\n├── ...\n```\n"
    _template: content
  - caption: Audio Download Links
    markdownTable: >-
      |  Language |  Download Link  |

      |:---------:|:---------------:|

      |  bengali  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/bengali.zip)
      (65 GB) |

      |  gujarati |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/gujarati.zip)
      (68 GB)|

      |   hindi   |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/hindi.zip)
      (229 GB) |

      |  kannada  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/kannada.zip)
      (63 GB) |

      | malayalam |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/malayalam.zip)
      (84 GB) |

      |  marathi  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/marathi.zip)
      (123 GB) |

      |    odia   |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/odia.zip) (74
      GB) |

      |  punjabi  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/punjabi.zip)
      (12 GB) |

      |  sanskrit |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/sanskrit.zip)
      (6 GB) |

      |   tamil   |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/tamil.zip)
      (107 GB) |

      |   telugu  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/telugu.zip)
      (80 GB) |

      |    urdu   |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/urdu.zip) (30
      GB)  |
    color: default
    _template: table
  - caption: Model Download links
    markdownTable: >-
      |  Language |  Download Link (3.6GB)  |

      |:---------:|:---------------:|

      |  bengali  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutil/shrutilipi_models/bengali/checkpoint_best.pt)
      |

      |  gujarati |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutil/shrutilipi_models/gujarati/checkpoint_best.pt
      )|

      |   hindi   |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutil/shrutilipi_models/hindi/checkpoint_best.pt)
      |

      |  marathi  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutil/shrutilipi_models/marathi/checkpoint_best.pt)|

      |    odia   |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutil/shrutilipi_models/odia/checkpoint_best.pt)
      |

      |   tamil   |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutil/shrutilipi_models/tamil/checkpoint_best.pt)
      |

      |   telugu  |
      [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutil/shrutilipi_models/telugu/checkpoint_best.pt)
      |
    color: ''
    _template: table
  - body: >
      ## Shrutilipi - Mining Process


      We summarize the key procedure we used for mining audio-text pairs from
      documents from the AIR dataset in the figure below. For a detailed
      description of the data mining process, please refer to our
      [paper](https://arxiv.org/abs/2208.12666).


      ![](https://res.cloudinary.com/ai4bharat/image/upload/v1661927359/alignment-figure\_pie8yd.png
      "Mining Process")
    _template: content
  - caption: Results on Hindi Benchmarks
    markdownTable: >-
      | Benchmarks                | Kathbath-Known | Kathbath-UnKnown | Tarini |
      CommonVoice 6 | CommonVoice 7 | CommonVoice 8 | CommonVoice 9 | Avg. |

      | ------------------------- | -------------- | ---------------- | ------ |
      ------------- | ------------- | ------------- | ------------- | ---- |

      | W2V (MUCS)                | 14.1           | 14.7             | 22.7   |
      19.4          | 19.5          | 20.7          | 20.5          | 18.8 |

      | W2V (MUCS + Shrutilipi)   | 9.4            | 9.6              | 19.7   |
      15            | 13.4          | 13.9          | 13.7          | 13.5 |

      | Conf. (MUCS)              | 17.2           | 17.7             | 25.4   |
      20.9          | 21.4          | 22.9          | 22.8          | 21.2 |

      | Conf. (MUCS + Shrutilipi) | 15.2           | 14.9             | 23.9   |
      19.3          | 19.1          | 20            | 19.9          | 18.9 |
    color: default
    _template: table
  - caption: Results on Kathbath Unknown Test Set
    markdownTable: >-
      |                       | bn   | gu  | hi   | mr   | or   | ta   | te   |
      Avg. |

      | --------------------- | ---- | --- | ---- | ---- | ---- | ---- | ---- |
      ---- |

      | Existing              | 14.4 | 15  | 14.7 | 25.6 | 31.5 | 24.1 | 22.3 |
      21.1 |

      | Existing + Shrutilipi | 13.4 | 9.5 | 9.6  | 15.7 | 21.5 | 19.7 | 17.7 |
      15.3 |
    color: default
    _template: table
  - caption: Results on MUCS Benchmark
    markdownTable: |-
      |                       | gu   | hi   | mr   | or   | ta   | te   | Avg. |
      | --------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
      | Existing              | 17.9 | 12   | 13.6 | 23.3 | 20.5 | 16.4 | 17.3 |
      | Existing + Shrutilipi | 12.8 | 11.1 | 11.4 | 23   | 20.7 | 13.8 | 15.5 |
    color: default
    _template: table
  - body: "## Citing our work\n\nIf you are using any of the resources, please cite the following article:\n\n```\n@misc{https://doi.org/10.48550/arxiv.2208.12666,\n  doi = {10.48550/ARXIV.2208.12666},\n  url = {https://arxiv.org/abs/2208.12666},\n  author = {Bhogale, Kaushal Santosh and Raman, Abhigyan and Javed, Tahir and Doddapaneni, Sumanth and Kunchukuttan, Anoop and Kumar, Pratyush and Khapra, Mitesh M.},\n  title = {Effectiveness of Mining Audio and Text Pairs from Public Data for Improving ASR Systems for Low-Resource Languages},\n  publisher = {arXiv},\n  year = {2022},\n  copyright = {arXiv.org perpetual, non-exclusive license}\n}\n```\n\nWe would like to hear from you if:\n\n*   You are using our resources. Please let us know how you are putting these resources to use.\n*   You have any feedback on these resources.\n\n## License\n\n### Dataset\n\nThe Shrutilipi dataset is released under this licensing scheme:\n\n*   We do not own any of the raw text and audio from which this dataset has been extracted.\n*   The raw dataset and audio have been crawled from the publicly available website: [https://newsonair.gov.in](https://newsonair.gov.in/)\n*   We license the actual packaging of this data under the\_[Creative Commons CC0 license (“no rights reserved”)](http://creativecommons.org/publicdomain/zero/1.0) license.\n*   To the extent possible under law,\_[AI4Bharat](https://ai4bharat.iitm.ac.in/samanantar)\_has waived all copyright and related or neighboring rights to\_the Shrutilipi dataset.\n*   This work is published from: India.\n\n### Code and Models\n\nThe code and models are released under the MIT License.\n\n## Contributors\n\n*   Kaushal Bhogale\n*   Abhigyan Raman\n*   Tahir Javed\n*   Sumanth Doddapaneni\n*   Anoop Kunchukuttan\n*   Mitesh Khapra\n*   Pratush Kumar\n\n## Contact\n\n*   Anoop Kunchukuttan ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))\n*   Mitesh Khapra ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))\n*   Pratyush Kumar ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))\n\n## Acknowledgements\n\nWe would like to thank the Ministry of Electronics and Information Technology ([MeitY](https://www.meity.gov.in/)) of the Government of India and the Centre for Development of Advanced Computing ([C-DAC](https://www.cdac.in/index.aspx?id=pune)), Pune for generously supporting this work and providing us access to multiple GPU nodes on the Param Siddhi Supercomputer. We would like to thank the EkStep Foundation and Nilekani Philanthropies for their generous grant which went into hiring human resources as well as cloud resources needed for this work. We would like to thank Megh Makhwana from Nvidia for helping in training Conformer-based ASR models. We would like to thank the EkStep Foundation for providing the Tarini dataset. We would like to thank Janki Nawale and Anupama Sujatha from AI4Bharat for helping in coordinating the annotation task, and extend thanks to all the annotators of AI4Bharat team.&#x20;\n"
    _template: content
---

