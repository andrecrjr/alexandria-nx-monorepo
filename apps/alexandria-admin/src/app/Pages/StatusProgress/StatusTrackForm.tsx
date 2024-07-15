import { toast } from '@alexandria/shadcn-ui/components/ui/use-toast';
import { TagInput, Tag } from 'emblor';
import { Controller, useForm } from 'react-hook-form';
import { CreateStatusTrackSchemaDTO } from '@alexandria/shared-dto-api/status-tracker/formSchema';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useState } from 'react';
import { Button, Label } from '@alexandria/shadcn-ui';
import request from '../../services';
import { useNavigate } from 'react-router-dom';
const resolver = classValidatorResolver(CreateStatusTrackSchemaDTO);

type Props = {
  initialValues?: Tag[];
  editId?: string;
};

const apiEndpoint = 'status-tracker';

export const StatusTrackForm = ({ initialValues, editId }: Props) => {
  const [tags, setTags] = useState<Tag[]>(initialValues ? initialValues : []);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const { control, handleSubmit, setValue } = useForm<{ statusHistory: Tag[] }>(
    {
      resolver: resolver,
      defaultValues: { statusHistory: initialValues || [] }
    }
  );
  const goTo = useNavigate();

  async function onSubmit(data: { statusHistory: Tag[] }) {
    try {
      await request(`${apiEndpoint}${initialValues ? `/${editId}` : ''}`, {
        method: initialValues ? 'PATCH' : 'POST',
        data: { statusHistory: data.statusHistory.map((item) => item.text) }
      });
      toast({
        title: `You ${editId ? 'updated' : 'submitted'} the following Status:`,
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(
                data.statusHistory.map((item) => item.text),
                null
              )}
            </code>
          </pre>
        )
      });
      goTo(`/${apiEndpoint}`);
    } catch (error) {
      toast({
        title: 'Problem to send data to the server',
        description: <p>Try again later!</p>
      });
    }
  }
  return (
    <div
      className="preview flex justify-center w- mx-auto mt-16 ring-offset-background 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Add Status to Track:</Label>
        <Controller
          name="statusHistory"
          control={control}
          render={({ field }) => (
            <TagInput
              {...field}
              placeholder="Enter a topic"
              tags={tags}
              styleClasses={{
                input: 'border border-gray-300 p-2 w-[300px]',
                inlineTagsContainer:
                  'bg-gray-100 p-2 rounded sm:max-w-[750px] flex-wrap',
                tagPopover: {
                  popoverContent: 'bg-white shadow-lg',
                  popoverTrigger: 'text-blue-500 hover:text-blue-600'
                },
                tagList: {
                  container: 'bg-red-100',
                  sortableList: 'p-1'
                },
                autoComplete: {
                  command: 'bg-blue-100',
                  popoverTrigger: 'bg-green-200',
                  popoverContent: 'p-4',
                  commandList: 'list-none',
                  commandGroup: 'font-bold',
                  commandItem: 'cursor-pointer hover:bg-gray-100'
                },
                tag: {
                  body: 'flex items-center gap-2',
                  closeButton: 'text-red-500 hover:text-red-600'
                }
              }}
              setTags={(newTags) => {
                setTags(newTags);
                setValue('statusHistory', newTags as [Tag, ...Tag[]]);
              }}
              activeTagIndex={activeTagIndex}
              setActiveTagIndex={setActiveTagIndex}
            />
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};
